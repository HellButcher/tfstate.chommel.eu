import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
import theme from './themeConfig';
import './globals.css';
import { App, Breadcrumb, ConfigProvider, Menu } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'TFState.chommel.eu',
	description: 'Manages Terraform and OpenTofu state with ease.',
};

const items = Array.from({ length: 15 }).map((_, index) => ({
	key: index + 1,
	label: `nav ${index + 1}`,
}));

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ConfigProvider theme={theme}>
					<App>
						<Layout style={{ minHeight: '100vh' }}>
							<Header style={{ display: 'flex', alignItems: 'center' }}>
								<Menu
									items={items}
									mode="horizontal"
									defaultSelectedKeys={['2']}
									style={{ flex: 1, minWidth: 0 }}
								/>
							</Header>
							<Content style={{ padding: '0 48px' }}>
								<Breadcrumb
									style={{ margin: '16px 0' }}
									items={[
										{ title: 'Home' },
										{ title: 'List' },
										{ title: 'App' },
									]}
								/>
								{children}
							</Content>
							<Footer style={{ textAlign: 'center' }}>
								TFState.chommel.eu ©{new Date().getFullYear()} Created by{' '}
								<a href="https://chommel.eu">HellButcher</a>
							</Footer>
						</Layout>
					</App>
				</ConfigProvider>
			</body>
		</html>
	);
}
