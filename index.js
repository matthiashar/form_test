const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
survey.render(document.getElementById("surveyElement"));

// ---- Map picker wiring (Leaflet) ----
(function attachMapPicker() {
  const openBtnId = "openMapPicker";
  function $(sel){ return document.querySelector(sel); }

  // Legt das Overlay (inkl. minimalen Styles) an, falls es fehlt.
  function ensureOverlay() {
    let overlay = document.getElementById("mapPickerOverlay");
    if (overlay) return overlay;

    // Styles nur einmal einfügen
    if (!document.getElementById("mapPickerStyles")) {
      const s = document.createElement("style");
      s.id = "mapPickerStyles";
      s.textContent = `
        #mapPickerOverlay{position:fixed;inset:0;background:rgba(0,0,0,.45);display:none;align-items:center;justify-content:center;z-index:9999;}
        #mapPickerModal{width:min(92vw,900px);height:min(80vh,680px);background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;}
        #mapPickerHeader{padding:10px 14px;font-weight:600;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between;}
        #mapPickerMap{flex:1 1 auto;}
        #mapPickerFooter{border-top:1px solid #eee;padding:10px;display:flex;gap:8px;justify-content:flex-end;}
        .mp-btn{border:1px solid #d0d7de;padding:8px 12px;border-radius:8px;cursor:pointer;background:#f6f8fa;}
        .mp-btn.primary{background:#0d6efd;color:#fff;border-color:#0d6efd;}
      `;
      document.head.appendChild(s);
    }

    // Overlay-HTML erzeugen
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div id="mapPickerOverlay" role="dialog" aria-modal="true" aria-label="Karte auswählen">
        <div id="mapPickerModal">
          <div id="mapPickerHeader">
            <span>Position auf Karte wählen</span>
            <button class="mp-btn" id="mapPickerClose" type="button">Schließen</button>
          </div>
          <div id="mapPickerMap"></div>
          <div id="mapPickerFooter">
            <button class="mp-btn" id="mapPickerCancel" type="button">Abbrechen</button>
            <button class="mp-btn primary" id="mapPickerConfirm" type="button" disabled>Übernehmen</button>
          </div>
        </div>
      </div>`;
    overlay = wrapper.firstElementChild;
    document.body.prepend(overlay);
    return overlay;
  }

  function openOverlay() {
    const overlay = ensureOverlay();
    overlay.style.display = "flex";
    // Map-Init nach dem Anzeigen (damit Container Größe hat)
    requestAnimationFrame(initMapOnce);
  }

  let map, marker, pickedLatLng = null, mapInited = false;

  function initMapOnce() {
    if (mapInited) { map.invalidateSize(); return; }
    const mapEl = document.getElementById("mapPickerMap");

    // Leaflet sicher laden (falls nicht in index.html eingebunden)
    function ensureLeaflet(cb){
      if (window.L) return cb();
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = cb;
      document.head.appendChild(script);
    }

    ensureLeaflet(() => {
      const currLat = parseFloat(survey.getValue("lat"));
      const currLng = parseFloat(survey.getValue("lng"));
      const hasCurr = Number.isFinite(currLat) && Number.isFinite(currLng);

      const start = hasCurr ? [currLat, currLng] : [50.93, 14.15];
	  const zoom  = hasCurr ? 13 : 12;

      map = L.map(mapEl).setView(start, zoom);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
      }).addTo(map);

      if (hasCurr) {
        marker = L.marker(start, { draggable: true }).addTo(map);
        pickedLatLng = { lat: currLat, lng: currLng };
        document.getElementById("mapPickerConfirm").disabled = false;
        marker.on("dragend", () => {
          const ll = marker.getLatLng();
          pickedLatLng = { lat: ll.lat, lng: ll.lng };
        });
      }

      map.on("click", (ev) => {
        const ll = ev.latlng;
        if (!marker) {
          marker = L.marker(ll, { draggable: true }).addTo(map);
          marker.on("dragend", () => {
            const ll2 = marker.getLatLng();
            pickedLatLng = { lat: ll2.lat, lng: ll2.lng };
          });
        } else {
          marker.setLatLng(ll);
        }
        pickedLatLng = { lat: ll.lat, lng: ll.lng };
        document.getElementById("mapPickerConfirm").disabled = false;
      });

      mapInited = true;
      setTimeout(() => map.invalidateSize(), 50);
    });
  }

  function closeOverlay() {
    const overlay = ensureOverlay();
    overlay.style.display = "none";
  }

  // Delegation
  document.addEventListener("click", (e) => {
    const tgt = e.target;
    if (!(tgt instanceof HTMLElement)) return;
    if (tgt.id === openBtnId) {
      e.preventDefault();
      openOverlay();
    } else if (tgt.id === "mapPickerClose" || tgt.id === "mapPickerCancel") {
      e.preventDefault();
      closeOverlay();
    } else if (tgt.id === "mapPickerConfirm") {
      e.preventDefault();
      if (pickedLatLng) {
        survey.setValue("lat", +pickedLatLng.lat.toFixed(6));
        survey.setValue("lng", +pickedLatLng.lng.toFixed(6));
      }
      closeOverlay();
    } else if (tgt.id === "mapPickerOverlay") {
      closeOverlay();
    }
  });

  // ESC schließt
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && ensureOverlay().style.display !== "none") {
      closeOverlay();
    }
  });

  // Warten bis DOM steht, dann sicherstellen, dass Overlay existiert
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ensureOverlay, { once: true });
  } else {
    ensureOverlay();
  }
})();

