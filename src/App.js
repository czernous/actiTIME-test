import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

async function App() {
  const template = document.createElement('div');
  template.classList.add('wrapper');
  template.innerHTML = `
  ${Header()}
  ${Content()}
  ${Footer()}
`;
  // Return a new node from template
  return template;
}

export default App;
