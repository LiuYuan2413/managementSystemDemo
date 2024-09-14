interface MenuItem {
    path: string;
    meta: {
        title: string;
        icon: string;
        hidden?: boolean;
    };
    children?: MenuItem[];
}

const menuList: MenuItem[] = [
    {
        path: '/fullNetworkResources',
        meta: {
            title: '全网资源',
            icon: 'VideoCameraOutlined',
            hidden: false,
        },
        children: [
            {
                path: '/fullNetworkResources/fullNetworkResourcesOne',
                meta: {
                    title: '全网资源一',
                    icon: 'VideoCameraOutlined',
                    hidden: false,
                },
                children: []
            },
            {
                path: '/fullNetworkResources/fullNetworkResourcesTwo',
                meta: {
                    title: '全网资源二',
                    icon: 'VideoCameraOutlined',
                    hidden: false,
                },
                children: []
            }
        ]
    },
    {
        path: '/userManagement',
        meta: {
            title: '用户管理',
            icon: 'TeamOutlined',
            hidden: false,
        },
        children: [
            {
                path: '/userManagement/userManagementOne',
                meta: {
                    title: '用户管理一',
                    icon: 'TeamOutlined',
                    hidden: false,
                },
                children: []
            },
            {
                path: '/userManagement/userManagementTwo',
                meta: {
                    title: '用户管理二',
                    icon: 'TeamOutlined',
                    hidden: false,
                },
                children: []
            }
        ]
    },
    {
        path: '/safetyRegulations',
        meta: {
            title: '安全规范',
            icon: 'SwitcherOutlined',
            hidden: false,
        },
        children: [
            {
                path: '/safetyRegulations/safetyRegulationsOne',
                meta: {
                    title: '安全规范一',
                    icon: 'SwitcherOutlined',
                    hidden: false,
                },
                children: []
            },
            {
                path: '/safetyRegulations/safetyRegulationsTwo',
                meta: {
                    title: '安全规范二',
                    icon: 'SwitcherOutlined',
                    hidden: false,
                },
                children: []
            }
        ]
    },
    {
        path: '/alarmCenter',
        meta: {
            title: '报警中心',
            icon: 'DiffOutlined',
            hidden: false,
        },
        children: [
            {
                path: '/alarmCenter/alarmCenterOne',
                meta: {
                    title: '报警中心一',
                    icon: 'DiffOutlined',
                    hidden: false,
                },
                children: []
            },
            {
                path: '/alarmCenter/alarmCenterTwo',
                meta: {
                    title: '报警中心二',
                    icon: 'DiffOutlined',
                    hidden: false,
                },
                children: []
            }
        ]
    },
    {
        path: '/queryStatistics',
        meta: {
            title: '查询统计',
            icon: 'FormOutlined',
            hidden: false,
        },
        children: [
            {
                path: '/queryStatistics/queryStatisticsOne',
                meta: {
                    title: '查询统计一',
                    icon: 'FormOutlined',
                    hidden: false,
                },
                children: []
            },
            {
                path: '/queryStatistics/queryStatisticsTwo',
                meta: {
                    title: '查询统计二',
                    icon: 'FormOutlined',
                    hidden: false,
                },
                children: []
            }
        ]
    },
    {
        path: '/applicationSecurity',
        meta: {
            title: '应用安全',
            icon: 'CheckSquareOutlined',
            hidden: false,
        },
        children: [
            {
                path: '/applicationSecurity/applicationSecurityOne',
                meta: {
                    title: '应用安全一',
                    icon: 'CheckSquareOutlined',
                    hidden: false,
                },
                children: []
            },
            {
                path: '/applicationSecurity/applicationSecurityTwo',
                meta: {
                    title: '应用安全二',
                    icon: 'CheckSquareOutlined',
                    hidden: false,
                },
                children: []
            }
        ]
    },
    {
        path: '/systemSettings',
        meta: {
            title: '系统设置',
            icon: 'MenuOutlined',
            hidden: false,
        },
        children: [
            {
                path: '/systemSettings/systemSettingsOne',
                meta: {
                    title: '系统设置一',
                    icon: 'MenuOutlined',
                    hidden: false,
                },
                children: []
            },
            {
                path: '/systemSettings/systemSettingsTwo',
                meta: {
                    title: '系统设置二',
                    icon: 'MenuOutlined',
                    hidden: false,
                },
                children: []
            }
        ]
    }
];

export default menuList