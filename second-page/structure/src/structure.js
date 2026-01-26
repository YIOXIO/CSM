// Конфигурация колонок
const COLUMN_CONFIG = {
  columns: [
    { selector: '.column-peach', color: 's-card_peach' },
    { selector: '.column-green', color: 's-card_green' },
    { selector: '.column-lightdust', color: 's-card_lightdust' },
    { selector: '.column-purple', color: 's-card_purple' },
    { selector: '.column-skyblue', color: 's-card_skyblue' },
    { selector: '.column-lightgrey', color: 's-card_lightgrey' },
    { selector: '.column-white', color: 's-card_white' },
    { selector: '.column-dust-school', color: 's-card_dust' },
    { selector: '.column-dust', color: 's-card_dust' },
    { selector: '.column-grey', color: 's-card_grey' },
  ],
  getContainers: () => {
    const containers = COLUMN_CONFIG.columns.map(col => document.querySelector(col.selector));

    return containers;
  },
  getColors: () => COLUMN_CONFIG.columns.map(col => col.color),
};

// Основные элементы DOM
const elements = {
  modal: document.querySelector("#modal"),
  iframe: document.querySelector("#modal-iframe"),
  popup: document.querySelector('.popup'),
  popupContent: document.querySelector('.popup__content'),
  structure: document.querySelector(".structure__layout_edit"),
  editButton: document.getElementById('edit-btn'),
  saveButton: document.getElementById('save-btn'),
  closeButton: document.getElementById('close-btn'),
  cancelBtn: document.querySelector('.structure__btn_cancel'),
  returnBtn: document.querySelector('.structure__btn_return'),
  splitBtn: document.querySelector('.structure__btn_split'),
  rec: document.querySelector('.Rec'),
};




const state = {
  data: null,
  originalData: null,
  undo: [],
  redo: [],
  lastSaved: null,
  selected: [],
  touchTimer: null,
  cloneMap: new WeakMap(),
};



async function init() {
  const data = await fetchData();
  if (!data?.structure?.columns) {

    return;
  }

  state.data = addUniqueIds(data);
  state.originalData = structuredClone(state.data);
  state.lastSaved = structuredClone(state.data);
  state.undo = [];
  state.redo = [];
  renderStructure();
  updateLists();
  setupModals();
  updateUI();

  elements.cancelBtn?.addEventListener('click', undo);
  elements.returnBtn?.addEventListener('click', redo);
  elements.saveButton?.addEventListener('click', save);
  elements.editButton?.addEventListener('click', () => elements.rec?.classList.add('Rec_is-active'));
  elements.closeButton?.addEventListener('click', () => elements.rec?.classList.remove('Rec_is-active'));
}


function addUniqueIds(data) {
  data.structure.columns.forEach((column, colIndex) => {
    column.items.forEach((item, itemIndex) => {
      item.id = `col-${colIndex}-item-${itemIndex}`;
      if (item.subitems || item.children) {
        addSubIds(item.subitems || item.children, `col-${colIndex}-item-${itemIndex}`);
      }
    });
  });
  return data;
}

function addSubIds(items, parentId) {
  items.forEach((subitem, subIndex) => {
    subitem.id = `${parentId}-sub-${subIndex}`;
    if (subitem.subitems || subitem.children) {
      addSubIds(subitem.subitems || subitem.children, subitem.id);
    }
  });
}


function renderStructure() {
  const containers = COLUMN_CONFIG.getContainers();
  const colors = COLUMN_CONFIG.getColors();

  containers.forEach((container, i) => {
    if (container && state.data.structure.columns[i]) {
      renderColumn(state.data.structure.columns[i], container, colors[i]);
    } else {

    }
  });

  updateCardColors();
}

// Рендеринг колонки
function renderColumn(columnData, container, color) {
  if (!columnData?.items) {

    return;
  }

  // Создаем карту существующих элементов
  const existingElements = new Map();
  Array.from(container.children).forEach(child => {
    const id = child.dataset.id;
    if (id) existingElements.set(id, child);
  });

  // Создаем карту новых элементов
  const newItemsMap = new Map();
  columnData.items.forEach(item => {
    newItemsMap.set(item.id, item);
  });


  existingElements.forEach((element, id) => {
    if (!newItemsMap.has(id)) {
      container.removeChild(element);
    }
  });


  columnData.items.forEach(item => {
    let element = existingElements.get(item.id);
    if (!element) {

      element = createItem(item, color);
      element.dataset.id = item.id;
      container.appendChild(element);
    } else {

      updateItem(element, item, color);
    }
  });
}

function updateItem(element, data) {
  const article = element.querySelector('article');
  if (!article) return;


  // Обновляем подэлементы, если они есть
  if (data.subitems?.length || data.children?.length) {
    const subList = article.querySelector('ol.s-card__order-list');
    if (subList) {

      subList.innerHTML = '';

      (data.subitems || data.children).forEach(subitem => {
        const subElement = createSubItem(subitem);
        subList.appendChild(subElement);
      });
    }
  }
}

// Создание элемента 
function createItem(data, color) {
  if (!data || typeof data !== 'object') {

    return document.createElement('li');
  }

  const li = document.createElement('li');
  const article = document.createElement('article');
  article.classList.add('s-card', color);

  if (data.type === 'basic' || !data.type) {
    if (data.name) {
      article.innerHTML = `
        <h3 class="s-card__header s-card__header_prorector">${data.title || ''}</h3>
        <h4 class="s-card__subheader s-card__subheader_prorector">${data.name.replace(' ', '<br>')}</h4>
      `;
    } else {
      article.innerHTML = `<p class="s-card__description">${(data.title || '').replace(' и ', ' <br>и ')}</p>`;
    }
    const a = document.createElement('a');
    a.href = data.link || '#';
    if (!data.link) a.classList.add('link-unvailable');
    a.appendChild(article);
    li.appendChild(a);

    if (data.subitems?.length || data.children?.length) {
      article.classList.add('scale-on-click');
      article.appendChild(createSubList(data.subitems || data.children));
    }
  } else if (data.type === 'school') {
    article.innerHTML = `<p class="s-card__description">${data.title || ''}</p>`;
    const a = document.createElement('a');
    a.href = data.link || '#';
    if (!data.link) a.classList.add('link-unvailable');
    a.appendChild(article);
    li.appendChild(a);

    if (data.subitems?.length || data.children?.length) {
      article.classList.add('scale-on-click');
      article.appendChild(createSubList(data.subitems || data.children));
    }
  } else if (data.type === 'subitems' || data.type === 'subitem') {
    article.classList.add('scale-on-click');
    article.innerHTML = `<p class="s-card__description">${(data.title || '').replace(' и ', ' <br>и ')}</p>`;
    const a = document.createElement('a');
    a.href = data.link || '#';
    if (!data.link) a.classList.add('link-unvailable');
    a.appendChild(article);
    if (data.subitems?.length || data.children?.length) {
      article.appendChild(createSubList(data.subitems || data.children));
    }
    li.appendChild(article);
  } else if (data.type === 'management') {
    const ul = document.createElement('ul');
    ul.classList.add('structure__list', 'structure__list_flex', 'sublist');
    if (Array.isArray(data.children) || Array.isArray(data.subitems)) {
      (data.children || data.subitems).forEach(item => {
        if (!item || typeof item !== 'object') {

          return;
        }
        const mgmtLi = document.createElement('li');
        mgmtLi.classList.add('line-flex');
        const mgmtArticle = document.createElement('article');
        mgmtArticle.classList.add('s-card', color);
        mgmtArticle.innerHTML = `<p class="s-card__description s-card__description_fw-500">${item.title || ''}</p>`;
        if (item.name) mgmtArticle.innerHTML += `<p class="s-card__name">${item.name}</p>`;
        if (item.children?.length || item.subitems?.length) {
          mgmtArticle.classList.add('scale-on-click');
          mgmtArticle.appendChild(createSubList(item.children || item.subitems));
        }
        const wrapper = item.link ? Object.assign(document.createElement('a'), { href: item.link || '' }) : mgmtArticle;
        if (item.link) wrapper.appendChild(mgmtArticle);
        mgmtLi.appendChild(wrapper);
        ul.appendChild(mgmtLi);
      });
    }
    li.appendChild(ul);
  }

  li.dataset.id = data.id;
  return li;
}


function createSubItem(subitem) {
  const li = document.createElement('li');
  li.dataset.id = subitem.id;
  const a = document.createElement('a');
  a.href = subitem.link || '#';
  if (!subitem.link) a.classList.add('link-unvailable');

  if (subitem.children?.length || subitem.subitems?.length) {

    const span = document.createElement('span');
    span.classList.add('s-card__span-accent');
    span.textContent = subitem.title || '';
    a.appendChild(span);
    li.appendChild(a);

    // Рекурсивно создаем вложенный список
    const nestedOl = createSubList(subitem.children || subitem.subitems);
    nestedOl.classList.add('s-card__order-list_mbs-0');
    li.appendChild(nestedOl);
  } else {

    const p = document.createElement('p');
    p.classList.add('s-card__order-point', 's-card__order-point_fz-10');
    p.textContent = `- ${subitem.title || ''}`;
    a.appendChild(p);
    li.appendChild(a);
  }

  return li;
}


function createSubList(items) {
  const ol = document.createElement('ol');
  ol.classList.add('s-card__order-list');

  if (!Array.isArray(items)) {

    return ol;
  }

  items.forEach(item => {
    if (!item || typeof item !== 'object') {

      return;
    }

    const subItem = createSubItem(item);
    ol.appendChild(subItem);
  });

  return ol;
}

// Управление модальными окнами 
function setupModals() {
  const closeHandler = (element, activeClass, callback) => e => {
    if (e.target === element || e.key === 'Escape') {
      element.classList.remove(activeClass);
      callback?.(e);
    }
  };

  const popupClose = closeHandler(elements.popup, 'popup_is_active', () => {
    elements.popupContent.querySelectorAll('.s-card.modified').forEach(card => {
      const original = state.cloneMap.get(card);
      if (original) {
        const itemInfo = findColumnAndItemByElement(original.parentElement);
        if (itemInfo?.item) {
          const updatedSubitems = Array.from(card.querySelector('ol.s-card__order-list')?.children || []).map(li => {
            const title = li.querySelector('.s-card__order-point')?.textContent.replace('- ', '').trim() ||
              li.querySelector('.s-card__span-accent')?.textContent.trim() || '';
            const link = li.querySelector('a')?.href || '';
            return { type: 'basic', title, link, name: '', children: [] };
          });
          const operation = {
            type: 'updateSubitems',
            id: itemInfo.item.id,
            columnIndex: itemInfo.columnIndex,
            oldSubitems: structuredClone(itemInfo.item.children),
            newSubitems: updatedSubitems,
          };
          itemInfo.item.children = updatedSubitems;
          saveOperation(operation);
        }
      }
    });
    elements.popupContent.classList.remove('popup_split');
    elements.popupContent.innerHTML = '';
  });

  elements.modal?.addEventListener('click', closeHandler(elements.modal, 'modal_is_active', () => elements.iframe.src = ''));
  elements.popup?.addEventListener('click', popupClose);
  document.addEventListener('keydown', popupClose);

  document.addEventListener('click', e => {
    if (elements.popupContent?.classList.contains('popup_split')) return;
    const link = e.target.closest('a');
    const scale = e.target.closest('.scale-on-click');

    if (link) {
      e.preventDefault();
      elements.iframe.src = link.href || '';
      elements.modal?.classList.add('modal_is_active');
    } else if (scale && !e.ctrlKey) {
      e.preventDefault();
      const clone = scale.cloneNode(true);
      clone.querySelectorAll('br').forEach(br => br.remove());
      clone.querySelectorAll('a:not(.link-unvailable)').forEach(a =>
        a.addEventListener('click', ev => {
          ev.preventDefault();
          elements.iframe.src = a.href || '';
          elements.modal?.classList.add('modal_is_active');
        })
      );
      elements.popupContent.innerHTML = '';
      elements.popupContent.appendChild(clone);
      elements.popup?.classList.add('popup_is_active');
      initSortable(clone.querySelectorAll('ol.s-card__order-list'), 'popup-items', saveOperation);
    }
  });
}

// Сохранение операции
function saveOperation(operation = null) {
  if (operation) {
    state.undo.push(operation);
    if (state.undo.length > 50) state.undo.shift();
    state.redo = [];
  }
  updateUI();
}

// Выполнение undo
function undo() {
  if (state.undo.length === 0) return;
  const operation = state.undo.pop();
  state.redo.push(operation);
  applyOperation(operation, true); // true для undo
  updateUI();
}

// Выполнение redo
function redo() {
  if (state.redo.length === 0) return;
  const operation = state.redo.pop();
  state.undo.push(operation);
  applyOperation(operation, false);
  updateUI();
}



function applyOperation(operation, isUndo) {
  if (operation.type === 'move') {
    const { id, from, to } = operation;
    const [source, target] = isUndo ? [to, from] : [from, to];
    moveItem(id, source, target);
  } else if (operation.type === 'updateSubitems') {
    const { id, columnIndex, oldSubitems, newSubitems } = operation;
    const column = state.data.structure.columns[columnIndex];
    const item = column.items.find(i => i.id === id);
    if (item) {
      item.children = isUndo ? oldSubitems : newSubitems;
      updateAffectedAreas({ columnIndex }, { columnIndex });
    }
  }
}

// Перемещение элемента
function moveItem(id, from, to) {
  const item = removeItem(from);
  if (!item) return;
  insertItem(to, item);
  updateAffectedAreas(from, to);
}

// Удаление элемента
function removeItem(location) {
  const { columnIndex, itemIndex, subitemIndex } = location;
  const column = state.data.structure.columns[columnIndex];
  if (subitemIndex !== undefined) {
    const item = column.items[itemIndex];
    return item.children.splice(subitemIndex, 1)[0];
  }
  return column.items.splice(itemIndex, 1)[0];
}

// Вставка элемента
function insertItem(location, item) {
  const { columnIndex, itemIndex, subitemIndex } = location;
  const column = state.data.structure.columns[columnIndex];
  if (subitemIndex !== undefined) {
    const parentItem = column.items[itemIndex];
    parentItem.children.splice(subitemIndex, 0, item);
  } else {
    column.items.splice(itemIndex, 0, item);
  }
}

function hasChanges() {
  if (!state.lastSaved) return true;
  return JSON.stringify(state.data) !== JSON.stringify(state.lastSaved);
}
function updateAffectedAreas(from, to) {
  const containers = COLUMN_CONFIG.getContainers();
  const colors = COLUMN_CONFIG.getColors();


  renderColumn(state.data.structure.columns[from.columnIndex], containers[from.columnIndex], colors[from.columnIndex]);


  if (from.columnIndex !== to.columnIndex) {
    renderColumn(state.data.structure.columns[to.columnIndex], containers[to.columnIndex], colors[to.columnIndex]);
  }

  // Обновление вложенных списков
  if (from.subitemIndex !== undefined || to.subitemIndex !== undefined) {
    const fromItem = state.data.structure.columns[from.columnIndex].items[from.itemIndex];
    const toItem = state.data.structure.columns[to.columnIndex].items[to.itemIndex];
    const fromLi = document.querySelector(`[data-id="${fromItem.id}"]`);
    const toLi = document.querySelector(`[data-id="${toItem.id}"]`);
    if (fromLi) updateItem(fromLi, fromItem, colors[from.columnIndex]);
    if (toLi && from.columnIndex !== to.columnIndex) updateItem(toLi, toItem, colors[to.columnIndex]);
  }
}
function updateUI() {
  const changes = hasChanges();
  elements.cancelBtn.disabled = state.undo.length === 0; // Изменено с <= 1
  elements.cancelBtn.style.opacity = state.undo.length > 0 ? '1' : '0.5';
  elements.returnBtn.disabled = state.redo.length === 0;
  elements.returnBtn.style.opacity = state.redo.length > 0 ? '1' : '0.5';
  elements.saveButton.disabled = !changes;
  elements.saveButton.style.opacity = changes ? '1' : '0.5';
  elements.splitBtn.disabled = state.selected.length !== 2;
  elements.splitBtn.style.opacity = state.selected.length === 2 ? '1' : '0.5';
  elements.splitBtn.style.cursor = state.selected.length === 2 ? 'pointer' : 'default';
}








// Цвета карточек
const colorMap = Object.fromEntries(COLUMN_CONFIG.columns.map(col => [col.selector.slice(1), col.color]));

function updateCardColors() {
  elements.structure?.querySelectorAll('ul').forEach(list => {
    const cards = list.querySelectorAll('.s-card, li > .s-card, li > a .s-card, ul > li > .s-card');
    const color = Object.entries(colorMap).find(([cls]) => list.classList.contains(cls))?.[1];
    if (color) {
      cards.forEach(card => {
        Object.values(colorMap).forEach(cls => card.classList.remove(cls));
        card.classList.add(color);
      });
    }
  });
}

// Редактирование и выбор 
function handleSelection(e) {
  const isTouch = e.type === 'touchstart';
  if ((!isTouch && !e.ctrlKey) || (isTouch && !e.ctrlKey)) return;

  const article = e.target.closest('article');
  if (!article) return;

  if (article.classList.contains('selected')) {
    article.classList.remove('selected');
    state.selected = state.selected.filter(el => el !== article);
  } else if (state.selected.length < 2) {
    const select = () => {
      article.classList.add('selected');
      state.selected.push(article);
      updateUI();
    };
    isTouch ? (state.touchTimer = setTimeout(select, 500)) : select();
  }
}

elements.structure?.addEventListener('mousedown', handleSelection);
elements.structure?.addEventListener('touchstart', handleSelection);
elements.structure?.addEventListener('touchend', () => clearTimeout(state.touchTimer));
elements.structure?.addEventListener('touchcancel', () => clearTimeout(state.touchTimer));

elements.splitBtn?.addEventListener('click', () => {
  if (state.selected.length !== 2) return;
  elements.popupContent.innerHTML = '';
  state.selected.forEach(el => {
    const clone = el.cloneNode(true);
    state.cloneMap.set(clone, el);
    elements.popupContent.appendChild(clone);
    clone.classList.remove('selected');
    el.classList.remove('selected');
  });
  elements.popup?.classList.add('popup_is_active');
  elements.popupContent.classList.add('popup_split');
  initSortable(elements.popupContent.querySelectorAll('ol.s-card__order-list'), 'popup-items', saveOperation);
  state.selected = [];
  updateUI();
});


function findColumnAndItemByElement(listElement) {
  const container = listElement.closest('.structure__list') || listElement.closest('.popup__content');
  if (!container) {

    return null;
  }

  if (container.classList.contains('structure__list')) {
    const columnIndex = COLUMN_CONFIG.columns.findIndex(col =>
      container.classList.contains(col.selector.slice(1))
    );
    if (columnIndex === -1) {

      return null;
    }
    const column = state.data.structure.columns[columnIndex];
    return { column, columnIndex };
  } else if (container.classList.contains('popup__content')) {
    const card = listElement.closest('.s-card');
    if (!card) {

      return null;
    }

    const title = card.querySelector('.s-card__description')?.textContent.trim() || '';
    let foundItem = null;
    let foundColumn = null;
    state.data.structure.columns.forEach((col, colIdx) => {
      col.items.forEach(item => {
        if (item.title === title) {
          foundItem = item;
          foundColumn = { column: col, columnIndex: colIdx };
        }
      });
    });
    return foundItem ? { column: foundColumn.column, item: foundItem, columnIndex: foundColumn.columnIndex } : null;
  }

  return null;
}

function handleDrop(evt) {
  const fromList = evt.from;
  const toList = evt.to;

  const fromInfo = findColumnAndItemByElement(fromList);
  const toInfo = findColumnAndItemByElement(toList);

  if (!fromInfo || !toInfo) {

    return;
  }

  const draggedItem = fromInfo.column.items[evt.oldIndex];
  if (!draggedItem) {

    return;
  }

  const operation = {
    type: 'move',
    id: draggedItem.id,
    from: { columnIndex: fromInfo.columnIndex, itemIndex: evt.oldIndex },
    to: { columnIndex: toInfo.columnIndex, itemIndex: evt.newIndex },
  };

  moveItem(draggedItem.id, operation.from, operation.to);
  saveOperation(operation);
}

function handleNestedDrop(evt) {
  const fromList = evt.from;
  const toList = evt.to;

  const fromInfo = findColumnAndItemByElement(fromList);
  const toInfo = findColumnAndItemByElement(toList);

  if (!fromInfo || !toInfo) {

    return;
  }

  const fromItem = fromInfo.item || fromInfo.column.items.find(item =>
    item.title === fromList.closest('.s-card')?.querySelector('.s-card__description')?.textContent.trim()
  );
  const toItem = toInfo.item || toInfo.column.items.find(item =>
    item.title === toList.closest('.s-card')?.querySelector('.s-card__description')?.textContent.trim()
  );

  if (!fromItem || !toItem) {

    return;
  }

  const subKey = fromItem.children ? 'children' : 'subitems';
  const draggedSubItem = fromItem[subKey][evt.oldIndex];
  if (!draggedSubItem) {

    return;
  }

  const operation = {
    type: 'move',
    id: draggedSubItem.id,
    from: {
      columnIndex: fromInfo.columnIndex,
      itemIndex: fromInfo.column.items.indexOf(fromItem),
      subitemIndex: evt.oldIndex,
    },
    to: {
      columnIndex: toInfo.columnIndex,
      itemIndex: toInfo.column.items.indexOf(toItem),
      subitemIndex: evt.newIndex,
    },
  };

  moveItem(draggedSubItem.id, operation.from, operation.to);
  saveOperation(operation);
}


function initSortable(targets, group, onEnd) {
  if (!targets?.forEach) {

    return;
  }

  targets.forEach(el => {
    new Sortable(el, {
      animation: 450,
      ghostClass: 'ghost',
      group: 'shared',
      nested: group === 'shared',
      dragClass: 'dragged',
      chosenClass: 'chosen',
      filter: 's-card-main',
      onStart: evt => {
        evt.item.classList.add('dragged');
        evt.from.classList.add('dragging');
      },
      onMove: evt => {
        const relatedList = evt.related?.closest('ul');
        elements.structure.querySelectorAll('ul').forEach(ul => {
          ul.classList.toggle('drop-target', ul === relatedList);
        });
      },
      onEnd: evt => {
        elements.structure.querySelectorAll('ul').forEach(ul =>
          ul.classList.remove('dragging', 'drop-target')
        );

        if (evt.from.classList.contains('s-card__order-list')) {
          handleNestedDrop(evt);
        } else {
          handleDrop(evt);
        }

        onEnd?.(evt);
      },
    });
  });
}

function updateLists() {
  initSortable(elements.structure?.querySelectorAll('ul'), 'shared', saveOperation);
}

// Запуск
init();