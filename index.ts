import './style.css';

switch (location.pathname) {
  case '/demo_1':
    import(`./demo_1`);
    break;
  case '/demo_2':
    import('./demo_2');
    break;
  case '/demo_3':
    import('./demo_3');
    break;
  case '/demo_4':
    import('./demo_4');
    break;
  default:
    break;
}
