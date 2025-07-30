import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Trang chủ</Link>
      <Link to="/products" style={{ marginRight: '10px' }}>Sản phẩm</Link>
      <Link to="/orders" style={{ marginRight: '10px' }}>Đơn hàng</Link>
      <Link to="/warehouse">Kho</Link>
    </nav>
  );
}

export default Navbar;
