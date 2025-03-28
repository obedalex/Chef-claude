import cheflogo from '../assets/images/chefclaudelogo2.png';

const Header = () => {
  return (
    <header>
      <img src={cheflogo} alt="cheflogo" />
      <h1>Chef Claude</h1>
    </header>
  );
};

export default Header;
