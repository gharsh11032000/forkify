import Views from './Views';
import previewView from './previewView';

class ResultsView extends Views {
  _errorMessage = 'No recipe found. Please try again! :)';
  _message = '';
  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
