import { NavLink, Link, useNavigate, NavigateOptions } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import logo from '../../../public/vite.svg';
import { Button } from 'antd';

export default function Home() {
  // 通过useSelector直接拿到store中定义的value
  const { value } = useAppSelector(state => state.counter);
  const title = '首页';

  // 编程式路由
  const navigate = useNavigate();
  type ParamsType = {
    id: number;
    name: string;
  } & NavigateOptions;
  const gotoCenter = () => {
    const params: ParamsType = { id: 100, name: 'yuan' };
    navigate('/center', { state: params });
  };

  return (
    <>
      <header className="app-header">
        <h1>{title}</h1>
        <img src={logo} className="app-logo" alt="logo"></img>
      </header>
      <section className="app-content">
        <h3 className="app-text">欢迎使用！状态管理获取的值：{value}</h3>
        <ul className="app-link">
          <li className="item">
            <Link to="/center" state={{ id: 100, name: 'yuan' }}>
              个人中心
            </Link>
          </li>
          <li className="item">
            <Link to="/car">测试404</Link>
          </li>
          <li className="item">
            <NavLink to="/test">测试二级路和状态管理测试</NavLink>
          </li>
        </ul>
        <Button type="primary" className="app-btn" onClick={gotoCenter}>
          测试编程路由
        </Button>
      </section>
    </>
  );
}
