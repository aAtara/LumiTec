/* ============================================
   Mapa interactivo del campus - LumiTec
   ============================================ */

const CampusMap = (() => {
  let currentScale = 1;
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 2;
  const SCALE_STEP = 0.25;

  const mapSvg = document.getElementById('campusMap');
  const infoPanel = document.getElementById('mapInfoPanel');
  const infoTitle = document.getElementById('infoTitle');
  const infoDesc = document.getElementById('infoDesc');
  const infoChatBtn = document.getElementById('infoChatBtn');
  const closeInfoBtn = document.getElementById('closeInfoPanel');
  const zoomInBtn = document.getElementById('zoomIn');
  const zoomOutBtn = document.getElementById('zoomOut');
  const zoomResetBtn = document.getElementById('zoomReset');

  let activeBuilding = null;

  function init() {
    const buildings = mapSvg.querySelectorAll('.map-building');
    buildings.forEach(building => {
      building.addEventListener('click', () => handleBuildingClick(building));
      building.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleBuildingClick(building);
        }
      });
    });

    closeInfoBtn.addEventListener('click', hideInfoPanel);
    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);
    zoomResetBtn.addEventListener('click', zoomReset);

    infoChatBtn.addEventListener('click', () => {
      if (activeBuilding) {
        const info = BUILDING_INFO[activeBuilding];
        if (info) {
          App.switchTab('chat');
          Chatbot.processInput(`¿Dónde está ${info.title.toLowerCase()}?`);
        }
      }
    });
  }

  function handleBuildingClick(element) {
    const buildingId = element.dataset.building;
    if (!buildingId || !BUILDING_INFO[buildingId]) return;

    mapSvg.querySelectorAll('.map-building--active').forEach(el => {
      el.classList.remove('map-building--active');
    });

    const allWithId = mapSvg.querySelectorAll(`[data-building="${buildingId}"]`);
    allWithId.forEach(el => el.classList.add('map-building--active'));

    activeBuilding = buildingId;
    showInfoPanel(buildingId);
  }

  function showInfoPanel(buildingId) {
    const info = BUILDING_INFO[buildingId];
    if (!info) return;

    infoTitle.textContent = `${info.icon} ${info.title}`;
    infoDesc.textContent = info.description;
    infoChatBtn.style.display = 'inline-block';
    infoPanel.classList.add('mapa__info-panel--visible');
  }

  function hideInfoPanel() {
    infoPanel.classList.remove('mapa__info-panel--visible');

    mapSvg.querySelectorAll('.map-building--active').forEach(el => {
      el.classList.remove('map-building--active');
    });

    activeBuilding = null;
  }

  function updateZoom() {
    mapSvg.style.transform = `scale(${currentScale})`;
  }

  function zoomIn() {
    if (currentScale < MAX_SCALE) {
      currentScale = Math.min(currentScale + SCALE_STEP, MAX_SCALE);
      updateZoom();
    }
  }

  function zoomOut() {
    if (currentScale > MIN_SCALE) {
      currentScale = Math.max(currentScale - SCALE_STEP, MIN_SCALE);
      updateZoom();
    }
  }

  function zoomReset() {
    currentScale = 1;
    updateZoom();
  }

  function showBuilding(buildingId) {
    if (!buildingId || !BUILDING_INFO[buildingId]) return;

    const building = mapSvg.querySelector(`[data-building="${buildingId}"]`);
    if (building) {
      hideInfoPanel();

      setTimeout(() => {
        handleBuildingClick(building);

        const container = document.getElementById('mapContainer');
        const rect = building.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (rect.top < containerRect.top || rect.bottom > containerRect.bottom) {
          building.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  }

  return {
    init,
    showBuilding,
    hideInfoPanel,
  };
})();
