import React from 'react';
import './topbar.css';
import topbarLogo from '../../Assets/userimage.jpeg';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FaSignOutAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Topbar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {token} = useSelector(state=>state.AuthReducer);

    const Logout = () => {
        dispatch({type:"LOGOUT"});
        navigate("/");
        toast.success("Logout Successfully")
    }

    const menu = (
        <Menu>
          <Menu.Item className="Menu_Items" key="0">
            <button onClick={Logout} className="logout_button" >Log Out <FaSignOutAlt /></button>
          </Menu.Item>
        </Menu>
      );

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="drop_div">
                        {token ? (
                            <>
                                <Dropdown overlay={menu}>
                                    <button className="btn ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        Tehreem Iqbal <DownOutlined className='down_arrow' />
                                    </button>
                                </Dropdown>
                            </>
                        ) : ""
                        }
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Topbar;
