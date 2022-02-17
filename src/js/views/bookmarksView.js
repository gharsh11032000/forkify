import Views from './Views';
import previewView from './previewView';

class BookmarksView extends Views {
  _errorMessage = 'No Bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';
  _parentElement = document.querySelector('.bookmarks__list');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
