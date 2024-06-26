import { LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space, Typography } from 'antd';
import styles from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from '../custom-button';
import { Paths } from '../../paths';
import { logout, selectUser } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';


export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <Layout.Header className={ styles.header }>
      <Space>
        <TeamOutlined className={ styles.teamIcon } />
        <Link to={ Paths.home }>
          <CustomButton type='ghost'>
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      {
        user ? (
          <CustomButton 
          type='ghost' 
          icon={ <LogoutOutlined /> }
          onClick={ onLogoutClick }
          >
            Выйти
          </CustomButton>
        ) : (
          <Space>
          <Link to={ Paths.register }>
            <CustomButton type='ghost' icon={ <UserOutlined />}>Зарегистрироваться</CustomButton>
          </Link>
          <Link to={ Paths.login }>
          <CustomButton type='ghost' icon={ <LoginOutlined />}>Войти</CustomButton>
          </Link>
        </Space>
        )
      }
    </Layout.Header>
  )
}
