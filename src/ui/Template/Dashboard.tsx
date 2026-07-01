import React from 'react'
import { Link } from 'react-router';

import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout;
import RouterPath from '../routes/Router';
import literals from '@/literals';

import './Dashboard.less';

interface DashboardProps {
    children: React.ReactNode
}

interface LayoutProps {
    children: React.ReactNode
}

const ServicesRoutes = () => {
    return (
        <ul className="services_routes">
            <li><Link to={RouterPath.SERVICES.OURSELVES}>{literals.t('services.ourselves.name')}</Link></li>
            <li><Link to={RouterPath.SERVICES.GROUP_ELECTRONICS}>{literals.t('services.genset.name')}</Link></li>
            <li><Link to={RouterPath.SERVICES.BOARD_ELECTRONICS}>{literals.t('services.three.name')}</Link></li>
            <li><Link to={RouterPath.SERVICES.FOTOVOLTAIC_BOARD}>{literals.t('services.four.name')}</Link></li>
            <li><Link to={RouterPath.SERVICES.ELECTRO_MOVIL}>{literals.t('services.five.name')}</Link></li>
        </ul>
    )
}

export default function Dashboard({ children }: DashboardProps) {
    return (
        <>
            <Header className="header">
                <div>
                    <Link to={RouterPath.MAIN}>{literals.t('COMERCEWEB-NAVIGATION-DASHBOARD-LOGO')}</Link>
                </div>
                <div >
                    <ServicesRoutes />
                </div>
                <div>
                    {literals.t('COMERCEWEB-DASHBOARD-SOCIAL-MEDIA')}
                </div>
            </Header>
            <Content className="content">
                {children}
            </Content>
            <Footer className="footer">
                {literals.t('COMERCEWEB-DASHBOARD-FOOTER')}
            </Footer>
        </>
    )
}
