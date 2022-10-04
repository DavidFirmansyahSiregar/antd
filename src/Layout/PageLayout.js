import React, { useState } from "react";
import { NavLink, Outlet,  } from "react-router-dom";
import { Button, Popconfirm, Layout, Menu } from "antd"
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons'
import "./pageLayout.css";


const { Header, Sider, Content, Footer } = Layout;
export const PageLayout = () => {
    // const navigate = useNavigate();

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showPopconfirm = () => {
        setOpen(true);
      };

    const handleOk = () => {
        setConfirmLoading(true);
    
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);
    
      };
    
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };

    return (
        <Layout>
        <div className="layout-container">
            <Sider>
                <NavLink className="sidebar-items" to={"/sidebar-page-one"}>
                    Page One
                </NavLink>
                <NavLink className="sidebar-items" to={"/sidebar-page-two"}>
                    Page Two
                </NavLink>
            </Sider>
            <div className="right-side-container">
                
                    <Header>
                    <NavLink className="sidebar-items" to={"/about"}>
                        About
                    </NavLink>
                    <NavLink className="sidebar-items" to={"/profile"}>
                        Profile
                        <UserOutlined />
                    </NavLink>
                    <Popconfirm
                        title="Are you sure?"
                        open={open}
                        onConfirm={handleOk}
                        okButtonProps={{ loading: confirmLoading }}
                        onCancel={handleCancel}
                    >
                        <Button 
                            type="primary" 
                            onClick={showPopconfirm}>
                            {<PoweroffOutlined />}
                            LOG OUT
                        </Button>
                    </Popconfirm>
                </Header>
                
                <div className="content">
                    <Outlet />
                </div>
                <Footer>
                    Copyright September 12, 2022 @ nzrfrz
                </Footer>
            </div>
        </div>
    </Layout>
    );
};

