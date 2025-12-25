 // Tailwind 配置 - 精简并统一的配色方案
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1e88e5',        // 主蓝
                primaryLight: '#64b5f6',   // 浅蓝
                primaryLighter: '#bbdefb', // 更浅蓝
                primaryDark: '#0d47a1',    // 深蓝
                accent: '#ff9800',         // 橙色（强调色）
                accentLight: '#ffb74d',    // 浅橙色
                accentDark: '#f57c00',     // 深橙色
                
                // 图表专用配色 - 统一的蓝色系
                chartBlue1: '#1e88e5',
                chartBlue2: '#42a5f5',
                chartBlue3: '#64b5f6',
                chartBlue4: '#90caf9',
                chartBlue5: '#bbdefb',
                chartBlue6: '#e3f2fd',
                
                // 创新项目方向配色
                ai: '#1e88e5',        // AI方向用主蓝
                lowAltitude: '#42a5f5',   // 低空方向用蓝2
                informatization: '#64b5f6', // 信息化方向用蓝3
                
                // 人才梯队配色
                senior: '#1e88e5',        // 高级职称
                intermediate: '#64b5f6',  // 中级职称
                junior: '#bbdefb',        // 初级职称
                
                // 性别配色
                male: '#1e88e5',          // 男性
                female: '#ff9800',        // 女性（用强调色区分）
                
                // 学历配色
                doctor: '#0d47a1',        // 博士
                master: '#1e88e5',        // 硕士
                bachelor: '#64b5f6',      // 本科
                
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827'
                }
            },
            fontFamily: {
                sans: ['"Microsoft YaHei"', '"PingFang SC"', 'system-ui', '-apple-system', 'sans-serif'],
                heading: ['"Microsoft YaHei"', '"PingFang SC"', 'Segoe UI', 'Roboto', 'sans-serif']
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }]
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'hover': '0 10px 40px rgba(0, 0, 0, 0.12)',
                'elevated': '0 20px 60px rgba(0, 0, 0, 0.15)'
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem'
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'gradient': 'gradient 3s ease infinite'
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' }
                }
            }
        }
    }
};

// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // 如果是移动端，点击后关闭菜单
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // 监听滚动，添加动画效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.analysis-card, .chart-container, .stats-card').forEach(element => {
        observer.observe(element);
    });

    // 初始化第一个分院为激活状态
    const techBtn = document.querySelector('.branch-btn');
    if (techBtn) {
        techBtn.classList.add('active-branch', 'bg-primary', 'text-white');
        techBtn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    }
    
    // 为所有分院按钮添加样式类
    document.querySelectorAll('.branch-btn').forEach(btn => {
        if (!btn.classList.contains('active-branch')) {
            btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        }
    });
});

// 分院详情切换功能
function showBranchDetail(branchId) {
    // 移除所有按钮的active状态
    document.querySelectorAll('.branch-btn').forEach(btn => {
        btn.classList.remove('active-branch', 'bg-primary', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    });
    
    // 为当前点击的按钮添加active状态
    event.target.classList.add('active-branch', 'bg-primary', 'text-white');
    event.target.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    
    // 隐藏所有分院详情
    document.querySelectorAll('.branch-detail').forEach(detail => {
        detail.classList.remove('active');
        detail.classList.add('hidden');
    });
    
    // 显示当前分院详情
    const detailElement = document.getElementById(`${branchId}-detail`);
    if (detailElement) {
        detailElement.classList.remove('hidden');
        detailElement.classList.add('active');
        
        // 添加动画效果
        setTimeout(() => {
            detailElement.style.opacity = 1;
            detailElement.style.transform = 'translateY(0)';
        }, 10);
    }
}

// 图表初始化函数
// 图表初始化函数 - 更新所有图表的颜色配置
function initCharts() {
    console.log('开始初始化图表...');
    
    // 检查ECharts是否加载
    if (typeof echarts === 'undefined') {
        console.error('ECharts未加载成功');
        alert('图表库加载失败，请刷新页面重试');
        return;
    }
    
    console.log('ECharts版本:', echarts.version);
    
    // 统一的颜色配置
    const chartColors = {
        primary: '#1e88e5',
        primaryLight: '#64b5f6',
        primaryLighter: '#bbdefb',
        primaryDark: '#0d47a1',
        accent: '#ff9800',
        accentLight: '#ffb74d',
        accentDark: '#f57c00'
    };
    
    // 初始化综合排名图表
try {
    var rankingChartDom = document.getElementById('rankingChart');
    if (rankingChartDom) {
        var rankingChart = echarts.init(rankingChartDom);
        
        var rankingOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
            },
            legend: {
                data: ['科研项目承担能力', '科技成果产出', '人才结构与梯队', '技术方向与创新能力'],
                bottom: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#6b7280'
                },
                itemGap: 20,
                itemWidth: 12,
                itemHeight: 12
            },
            grid: {
                left: '1%',
                right: '1%',
                bottom: '10%',
                top: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['测绘一院', '滨海院', '测绘三院', '测绘四院', '基础测绘院', '测绘七院', '测绘八院', '海洋院', '调查监测院', '信息工程院', '技术研发中心'],
                axisLabel: {
                    interval: 0,
                    fontSize: 12,
                    color: '#6b7280'
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            series: [
                {
                    name: '科研项目承担能力',
                    type: 'bar',
                    stack: 'total',
                    data: [1.2, 2.4, 3.6, 4.8, 6, 7.2, 8.4, 9.6, 10.8, 12, 13.2],
                    itemStyle: {
                        color: '#1565c0',
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(30, 136, 229, 0.3)'
                        }
                    }
                },
                {
                    name: '科技成果产出',
                    type: 'bar',
                    stack: 'total',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    itemStyle: {
                        color: '#2196f3',
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(100, 181, 246, 0.3)'
                        }
                    }
                },
                {
                    name: '人才结构与梯队',
                    type: 'bar',
                    stack: 'total',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    itemStyle: {
                        color: '#64b5f6',
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(187, 222, 251, 0.3)'
                        }
                    }
                },
                {
                    name: '技术方向与创新能力',
                    type: 'bar',
                    stack: 'total',
                    data: [0.4, 0.8, 1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4],
                    itemStyle: {
                        color: '#bbdefb',
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(255, 152, 0, 0.3)'
                        }
                    }
                }
            ]
        };
        rankingChart.setOption(rankingOption);
        console.log('综合排名图表初始化成功');
    }
} catch (error) {
    console.error('综合排名图表初始化失败:', error);
}
    
    // 初始化科研项目承担能力图表 - 堆叠柱状图+折线双Y轴版本
try {
    var projectCapabilityChartDom = document.getElementById('projectCapabilityChart');
    if (projectCapabilityChartDom) {
        var projectCapabilityChart = echarts.init(projectCapabilityChartDom);
        
        // 示例数据：包含项目级别和经费信息
        var projectData = [
            {
                name: '技术研发中心',
                projects: {
                    national: 8,     // 国家级项目数
                    provincial: 6,   // 省部级项目数
                    other: 4         // 其他项目数
                },
                totalFunds: 520,     // 总经费（万元）
                avgFunds: 28.9       // 平均每个项目经费
            },
            {
                name: '信息工程院',
                projects: {
                    national: 6,
                    provincial: 8,
                    other: 3
                },
                totalFunds: 425,
                avgFunds: 25.0
            },
            {
                name: '调查监测院',
                projects: {
                    national: 4,
                    provincial: 7,
                    other: 4
                },
                totalFunds: 380,
                avgFunds: 25.3
            },
            {
                name: '海洋院',
                projects: {
                    national: 3,
                    provincial: 6,
                    other: 3
                },
                totalFunds: 285,
                avgFunds: 23.8
            },
            {
                name: '测绘八院',
                projects: {
                    national: 2,
                    provincial: 5,
                    other: 3
                },
                totalFunds: 240,
                avgFunds: 24.0
            },
            {
                name: '测绘七院',
                projects: {
                    national: 2,
                    provincial: 4,
                    other: 4
                },
                totalFunds: 210,
                avgFunds: 21.0
            },
            {
                name: '基础测绘院',
                projects: {
                    national: 1,
                    provincial: 3,
                    other: 5
                },
                totalFunds: 180,
                avgFunds: 20.0
            },
            {
                name: '测绘四院',
                projects: {
                    national: 1,
                    provincial: 2,
                    other: 4
                },
                totalFunds: 140,
                avgFunds: 20.0
            },
            {
                name: '测绘三院',
                projects: {
                    national: 0,
                    provincial: 2,
                    other: 5
                },
                totalFunds: 105,
                avgFunds: 15.0
            },
            {
                name: '滨海院',
                projects: {
                    national: 0,
                    provincial: 1,
                    other: 4
                },
                totalFunds: 75,
                avgFunds: 15.0
            },
            {
                name: '测绘一院',
                projects: {
                    national: 0,
                    provincial: 1,
                    other: 3
                },
                totalFunds: 60,
                avgFunds: 15.0
            }
        ];
        
        // 提取数据用于图表
        var branches = projectData.map(item => item.name);
        var nationalData = projectData.map(item => item.projects.national);
        var provincialData = projectData.map(item => item.projects.provincial);
        var otherData = projectData.map(item => item.projects.other);
        var totalFundsData = projectData.map(item => item.totalFunds);
        
        // 计算每个分院的总项目数（用于百分比计算）
        var totalProjects = projectData.map(item => 
            item.projects.national + item.projects.provincial + item.projects.other
        );
        
        var projectCapabilityOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var branchIndex = params[0].dataIndex;
                    var branchData = projectData[branchIndex];
                    
                    // 计算各级别项目比例
                    var total = totalProjects[branchIndex];
                    var nationalRatio = total > 0 ? (branchData.projects.national / total * 100).toFixed(1) : 0;
                    var provincialRatio = total > 0 ? (branchData.projects.provincial / total * 100).toFixed(1) : 0;
                    var otherRatio = total > 0 ? (branchData.projects.other / total * 100).toFixed(1) : 0;
                    
                    var result = `
                        <div style="margin-bottom: 8px; font-weight: bold; font-size: 14px;">${branchData.name}</div>
                        <div style="border-bottom: 1px solid #e5e7eb; margin-bottom: 8px; padding-bottom: 8px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span>总项目数:</span>
                                <span><b>${total}项</b></span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>总经费:</span>
                                <span style="color: #f59e0b; font-weight: bold;">${branchData.totalFunds}万元</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>平均项目经费:</span>
                                <span>${branchData.avgFunds}万元/项</span>
                            </div>
                        </div>
                        <div style="font-weight: 500; margin-bottom: 4px;">项目级别分布:</div>
                    `;
                    
                    // 项目级别详情
                    result += `
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
                            <div style="display: flex; align-items: center;">
                                <div style="width: 10px; height: 10px; background: #0d47a1; border-radius: 2px; margin-right: 6px;"></div>
                                <span>国家级:</span>
                            </div>
                            <span><b>${branchData.projects.national}项</b> (${nationalRatio}%)</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
                            <div style="display: flex; align-items: center;">
                                <div style="width: 10px; height: 10px; background: #1e88e5; border-radius: 2px; margin-right: 6px;"></div>
                                <span>省部级:</span>
                            </div>
                            <span><b>${branchData.projects.provincial}项</b> (${provincialRatio}%)</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center;">
                                <div style="width: 10px; height: 10px; background: #bbdefb; border-radius: 2px; margin-right: 6px;"></div>
                                <span>其他:</span>
                            </div>
                            <span><b>${branchData.projects.other}项</b> (${otherRatio}%)</span>
                        </div>
                    `;
                    
                    return result;
                }
            },
            legend: {
                data: [
                    { name: '国家级项目', textStyle: { color: '#6b7280' } },
                    { name: '省部级项目', textStyle: { color: '#6b7280' } },
                    { name: '其他项目', textStyle: { color: '#6b7280' } },
                    { name: '总经费', textStyle: { color: '#f59e0b', fontWeight: 'bold' } }
                ],
                bottom: 0,
                textStyle: {
                    fontSize: 12
                },
                itemWidth: 12,
                itemHeight: 12
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '15%',
                top: '10%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: branches,
                    axisLabel: {
                        interval: 0,
                        rotate: 45,
                        fontSize: 12,
                        color: '#6b7280'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e5e7eb'
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                // 左侧Y轴：项目数量
                {
                    type: 'value',
                    name: '项目数量（项）',
                    nameLocation: 'middle',
                    nameGap: 25,
                    nameTextStyle: {
                        color: '#6b7280',
                        fontSize: 12
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f3f4f6',
                            type: 'dashed'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#e5e7eb'
                        }
                    }
                },
                // 右侧Y轴：总经费
                {
                    type: 'value',
                    name: '总经费（万元）',
                    nameLocation: 'middle',
                    nameGap: 35,
                    position: 'right',
                    offset: 0, // 保持原位，不偏移
                    nameTextStyle: {
                        color: '#f59e0b',
                        fontSize: 12,
                        fontWeight: 'bold'
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#f59e0b'
                        }
                    },
                    axisLabel: {
                        color: '#f59e0b',
                        fontWeight: 'bold',
                        margin: 8 // 增加边距
                    }
                }
            ],
            series: [
                // 堆叠柱状图 - 国家级项目
                {
                    name: '国家级项目',
                    type: 'bar',
                    stack: 'projectLevel',
                    data: nationalData,
                    itemStyle: {
                        color: '#0d47a1',
                        borderRadius: [4, 4, 0, 0]
                    },
                    label: {
                        show: false,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(13, 71, 161, 0.3)'
                        }
                    }
                },
                // 堆叠柱状图 - 省部级项目
                {
                    name: '省部级项目',
                    type: 'bar',
                    stack: 'projectLevel',
                    data: provincialData,
                    itemStyle: {
                        color: '#1e88e5',
                        borderRadius: [0, 0, 0, 0]
                    },
                    label: {
                        show: false,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(30, 136, 229, 0.3)'
                        }
                    }
                },
                // 堆叠柱状图 - 其他项目
                {
                    name: '其他项目',
                    type: 'bar',
                    stack: 'projectLevel',
                    data: otherData,
                    itemStyle: {
                        color: '#bbdefb',
                        borderRadius: [0, 0, 4, 4]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function(params) {
                            var total = totalProjects[params.dataIndex];
                            return total + '项';
                        },
                        color: '#374151',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(187, 222, 251, 0.3)'
                        }
                    }
                },
                // 折线图 - 总经费（使用右侧Y轴）
                {
                    name: '总经费',
                    type: 'line',
                    yAxisIndex: 1,
                    data: totalFundsData,
                    symbol: 'circle',
                    symbolSize: 8,
                    lineStyle: {
                        color: '#f59e0b',
                        width: 3,
                        type: 'solid'
                    },
                    itemStyle: {
                        color: '#f59e0b',
                        borderColor: '#ffffff',
                        borderWidth: 2
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}万',
                        color: '#f59e0b',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontWeight: 'bold',
                            fontSize: 12
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(245, 158, 11, 0.3)'
                        }
                    },
                    // 添加区域填充（浅色背景）
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                { offset: 0, color: 'rgba(245, 158, 11, 0.2)' },
                                { offset: 1, color: 'rgba(245, 158, 11, 0.01)' }
                            ]
                        }
                    }
                }
            ]
        };
        
        projectCapabilityChart.setOption(projectCapabilityOption);
        console.log('科研项目承担能力图表（堆叠柱状图+折线）初始化成功');
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            projectCapabilityChart.resize();
        });
    }
} catch (error) {
    console.error('科研项目承担能力图表初始化失败:', error);
}
    
    // 初始化科技成果产出图表（雷达图） - 增加软著情况
try {
    var techOutputChartDom = document.getElementById('techOutputChart');
    if (techOutputChartDom) {
        var techOutputChart = echarts.init(techOutputChartDom);
        
        // 统一的颜色配置
        const radarColors = [
            '#e3f2fd',         // 技术研发中心 - 主蓝
            '#bbdefb',    // 信息工程院 - 浅蓝
            '#90caf9',  // 调查监测院 - 更浅蓝
            '#64b5f6',          // 海洋院 - 橙色
            '#42a5f5',                   // 测绘八院 - 蓝色4
            '#2196f3',                   // 测绘七院 - 蓝色5
            '#1e88e5',                   // 基础测绘院 - 蓝色6
            '#1976d2',                   // 测绘四院 - 蓝色7
            '#1565c0',                   // 测绘三院 - 深蓝
            '#0d47a1',                   // 滨海院 - 中蓝
            '#0a3880'                    // 测绘一院 - 蓝色3
        ];
        
        var techOutputOption = {
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var result = '<div style="font-weight: bold; margin-bottom: 8px;">' + params.name + '</div>';
                    var indicators = ['获奖情况', '专利情况', '论文发表', '标准制定', '软著情况'];
                    indicators.forEach(function(indicator, index) {
                        result += '<div>' + indicator + ': ' + params.value[index] + '</div>';
                    });
                    return result;
                }
            },
            legend: {
                data: [
                    '技术研发中心', '信息工程院', '调查监测院', '海洋院', 
                    '测绘八院', '测绘七院', '基础测绘院', '测绘四院', 
                    '测绘三院', '滨海院', '测绘一院'
                ],
                bottom: 0,
                type: 'scroll',
                orient: 'horizontal',
                textStyle: {
                    fontSize: 11,
                    color: '#6b7280'
                },
                pageTextStyle: {
                    color: '#6b7280'
                },
                pageIconColor: chartColors.primary,
                pageIconInactiveColor: '#d1d5db',
                pageIconSize: 12,
                pageButtonItemGap: 3,
                pageFormatter: '{current}/{total}',
                pageButtonPosition: 'end'
            },
            radar: {
                indicator: [
                    { name: '获奖情况', max: 10 },
                    { name: '专利情况', max: 5 },
                    { name: '论文发表', max: 5 },
                    { name: '标准制定', max: 5 },
                    { name: '软著情况', max: 5 }  // 新增软著指标
                ],
                radius: '65%',
                splitNumber: 4,
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.5)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12
                    }
                }
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [10, 5, 5, 5, 5], // 增加软著值
                            name: '技术研发中心',
                            areaStyle: {
                                color: 'rgba(30, 136, 229, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[0],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[0]
                            },
                            symbolSize: 6
                        },
                        {
                            value: [8, 5, 4, 5, 4.5],
                            name: '信息工程院',
                            areaStyle: {
                                color: 'rgba(100, 181, 246, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[1],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[1]
                            },
                            symbolSize: 6
                        },
                        {
                            value: [7, 4, 4, 4, 4],
                            name: '调查监测院',
                            areaStyle: {
                                color: 'rgba(187, 222, 251, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[2],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[2]
                            },
                            symbolSize: 6
                        },
                        {
                            value: [6, 3, 3, 3, 3],
                            name: '海洋院',
                            areaStyle: {
                                color: 'rgba(100, 181, 246, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[3],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[3]
                            },
                            symbolSize: 6
                        },
                        {
                            value: [5, 2.5, 2.5, 2.5, 2.5],
                            name: '测绘八院',
                            areaStyle: {
                                color: 'rgba(66, 165, 245, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[4],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[4]
                            },
                            symbolSize: 6
                        },
                        {
                            value: [4, 2, 2, 2, 2],
                            name: '测绘七院',
                            areaStyle: {
                                color: 'rgba(144, 202, 249, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[5],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[5]
                            },
                            symbolSize: 6
                        },
                        {
                            value: [3, 1.5, 1.5, 1.5, 1.5],
                            name: '基础测绘院',
                            areaStyle: {
                                color: 'rgba(187, 222, 251, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[6],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[6]
                            },
                            symbolSize: 6
                        },
                        {
                            value: [2, 1, 1, 1, 1],
                            name: '测绘四院',
                            areaStyle: {
                                color: 'rgba(227, 242, 253, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[7],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[7]
                            },
                            symbolSize: 6
                        },
                        {
                            value: [1.5, 0.8, 0.8, 0.8, 0.8],
                            name: '测绘三院',
                            areaStyle: {
                                color: 'rgba(13, 71, 161, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[8],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[8]
                            },
                            symbolSize: 6
                        },
                        {
                            value: [1, 0.5, 0.5, 0.5, 0.5],
                            name: '滨海院',
                            areaStyle: {
                                color: 'rgba(25, 118, 210, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[9],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[9]
                            },
                            symbolSize: 6
                        },
                        {
                            value: [0.5, 0.2, 0.2, 0.2, 0.2],
                            name: '测绘一院',
                            areaStyle: {
                                color: 'rgba(33, 150, 243, 0.2)'
                            },
                            lineStyle: {
                                color: radarColors[10],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[10]
                            },
                            symbolSize: 6
                        }
                    ]
                }
            ]
        };
        techOutputChart.setOption(techOutputOption);
        console.log('科技成果产出图表（增加软著）初始化成功');
    }
} catch (error) {
    console.error('科技成果产出图表初始化失败:', error);
}
    

// ============ 修改：四个成果等级分布雷达图（展示所有分院） ============

// 定义分院颜色配置（统一的蓝色系）
var branchColors = {
    '技术研发中心': '#e3f2fd',
    '信息工程院': '#bbdefb',
    '调查监测院': '#90caf9',
    '海洋院': '#64b5f6',
    '测绘八院': '#42a5f5',
    '测绘七院': '#2196f3',
    '基础测绘院': '#1e88e5',
    '测绘四院': '#1976d2',
    '测绘三院': '#1565c0',
    '滨海院': '#0d47a1',
    '测绘一院': '#0a3880'
};

// 分院名称数组
var branches = Object.keys(branchColors);

// 统一的雷达图配置（图例放在下面，缩小尺寸，颜色正确）
function getRadarBaseOption(indicators, unit) {
    // 创建图例数据，确保颜色正确
    var legendData = branches.map(function(branchName) {
        return {
            name: branchName,
            // 为图例项设置颜色
            itemStyle: {
                color: branchColors[branchName]
            },
            textStyle: {
                color: '#6b7280'
            }
        };
    });
    
    // 为图例formatter提供分支颜色的访问
    var legendFormatter = function(name) {
        var shortName = name;
        if (name.includes('技术研发中心')) shortName = '技术中心';
        if (name.includes('信息工程院')) shortName = '信息院';
        if (name.includes('调查监测院')) shortName = '监测院';
        if (name.includes('基础测绘院')) shortName = '基础院';
        if (name.includes('测绘八院')) shortName = '八院';
        if (name.includes('测绘七院')) shortName = '七院';
        if (name.includes('测绘四院')) shortName = '四院';
        if (name.includes('测绘三院')) shortName = '三院';
        if (name.includes('测绘一院')) shortName = '一院';
        if (name.includes('海洋院')) shortName = '海洋院';
        if (name.includes('滨海院')) shortName = '滨海院';
        return shortName;
    };
    
    return {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#e5e7eb',
            borderWidth: 1,
            textStyle: { color: '#374151', fontSize: 10 },
            padding: [8, 12],
            extraCssText: 'box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); border-radius: 6px;',
            formatter: function(params) {
                var result = '<div style="font-weight: bold; margin-bottom: 6px; font-size: 11px;">' + params.name + '</div>';
                result += '<div style="display: flex; align-items: center; margin-bottom: 4px;">';
                result += '<div style="width: 8px; height: 8px; background: ' + params.color + '; border-radius: 50%; margin-right: 6px;"></div>';
                result += '<span style="font-size: 10px;">' + params.seriesName + '</span>';
                result += '</div>';
                
                for (var i = 0; i < indicators.length; i++) {
                    result += '<div style="display: flex; justify-content: space-between; margin-bottom: 2px; font-size: 10px;">';
                    result += '<span>' + indicators[i].name + ':</span>';
                    result += '<span style="font-weight: bold;">' + params.value[i] + unit + '</span>';
                    result += '</div>';
                }
                return result;
            }
        },
        legend: {
            type: 'scroll',
            orient: 'horizontal',
            left: 'center',
            top: 'bottom',
            height: '15%',
            textStyle: {
                fontSize: 11,
                color: '#6b7280'
            },
            pageTextStyle: {
                color: '#6b7280',
                fontSize: 11
            },
            pageIconColor: '#1e88e5',
            pageIconInactiveColor: '#d1d5db',
            pageIconSize: 10,
            itemWidth: 8,
            itemHeight: 6,
            itemGap: 4,
            pageButtonItemGap: 2,
            pageButtonGap: 2,
            pageFormatter: '{current}/{total}',
            formatter: legendFormatter,
            data: legendData, // 使用包含颜色的图例数据
            // 为每个图例项设置颜色
            itemStyle: {
                // 这里不设置颜色，因为我们在legendData中已经设置了
            }
        },
        radar: {
            indicator: indicators,
            center: ['50%', '45%'],
            radius: '65%',
            splitNumber: 4,
            shape: 'circle',
            axisLine: {
                lineStyle: {
                    color: '#e5e7eb',
                    opacity: 0.5,
                    width: 0.5
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#f3f4f6',
                    width: 0.5
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.3)']
                }
            },
            name: {
                textStyle: {
                    color: '#6b7280',
                    fontSize: 11,
                    padding: [0, 2]
                }
            }
        },
        grid: {
            top: 10,
            bottom: '20%',
            left: 10,
            right: 10
        }
    };
}

// 1. 获奖等级分布雷达图
try {
    var awardLevelChartDom = document.getElementById('awardLevelChart');
    if (awardLevelChartDom) {
        var awardLevelChart = echarts.init(awardLevelChartDom);
        
        // 获奖等级指标（缩短名称）
        var awardIndicators = [
            { name: '国家级', max: 10 },
            { name: '局级', max: 20 },
            { name: '省部级', max: 30 },
            { name: '其他', max: 40 }
        ];
        
        // 分院获奖数据（示例数据）
        var awardData = [
            { name: '技术研发中心', value: [8, 15, 22, 30] },
            { name: '信息工程院', value: [6, 12, 18, 25] },
            { name: '调查监测院', value: [4, 9, 15, 20] },
            { name: '海洋院', value: [3, 7, 12, 18] },
            { name: '测绘八院', value: [2, 5, 10, 15] },
            { name: '测绘七院', value: [2, 4, 8, 12] },
            { name: '基础测绘院', value: [1, 3, 6, 10] },
            { name: '测绘四院', value: [1, 2, 5, 8] },
            { name: '测绘三院', value: [0, 1, 3, 6] },
            { name: '滨海院', value: [0, 1, 2, 4] },
            { name: '测绘一院', value: [0, 0, 1, 3] }
        ];
        
        // 创建系列数据，确保系列名称和颜色匹配
        var seriesData = branches.map(function(branchName, index) {
            var branchColor = branchColors[branchName];
            // 找到对应的数据
            var dataItem = awardData.find(function(item) {
                return item.name === branchName;
            });
            
            return {
                name: branchName,
                type: 'radar',
                symbol: 'circle',
                symbolSize: 2,
                lineStyle: {
                    width: 0.8
                },
                itemStyle: {
                    color: branchColor // 确保系列有颜色
                },
                data: [{
                    value: dataItem ? dataItem.value : [0, 0, 0, 0],
                    name: branchName,
                    itemStyle: {
                        color: branchColor
                    },
                    lineStyle: {
                        color: branchColor,
                        width: 0.8
                    },
                    areaStyle: {
                        color: branchColor.replace(')', ', 0.1)').replace('rgb', 'rgba'),
                        opacity: 0.03
                    }
                }]
            };
        });
        
        var awardLevelOption = getRadarBaseOption(awardIndicators, '项');
        awardLevelOption.series = seriesData;
        
        awardLevelChart.setOption(awardLevelOption);
        console.log('获奖等级分布雷达图初始化成功');
        
        window.addEventListener('resize', function() {
            awardLevelChart.resize();
        });
    }
} catch (error) {
    console.error('获奖等级分布雷达图初始化失败:', error);
}

// 2. 专利等级分布雷达图
try {
    var patentLevelChartDom = document.getElementById('patentLevelChart');
    if (patentLevelChartDom) {
        var patentLevelChart = echarts.init(patentLevelChartDom);
        
        // 专利等级指标（缩短名称）
        var patentIndicators = [
            { name: '实用新型', max: 15 },
            { name: '发明', max: 25 },
            { name: '外观', max: 10 },
            { name: '软著', max: 20 }
        ];
        
        // 分院专利数据（示例数据）
        var patentData = [
            { name: '技术研发中心', value: [12, 20, 5, 18] },
            { name: '信息工程院', value: [8, 15, 3, 12] },
            { name: '调查监测院', value: [5, 10, 2, 8] },
            { name: '海洋院', value: [3, 8, 1, 6] },
            { name: '测绘八院', value: [2, 6, 1, 5] },
            { name: '测绘七院', value: [1, 4, 0, 4] },
            { name: '基础测绘院', value: [1, 3, 0, 3] },
            { name: '测绘四院', value: [0, 2, 0, 2] },
            { name: '测绘三院', value: [0, 1, 0, 1] },
            { name: '滨海院', value: [0, 1, 0, 1] },
            { name: '测绘一院', value: [0, 0, 0, 1] }
        ];
        
        // 创建系列数据
        var seriesData = branches.map(function(branchName) {
            var branchColor = branchColors[branchName];
            var dataItem = patentData.find(function(item) {
                return item.name === branchName;
            });
            
            return {
                name: branchName,
                type: 'radar',
                symbol: 'circle',
                symbolSize: 2,
                lineStyle: {
                    width: 0.8
                },
                itemStyle: {
                    color: branchColor
                },
                data: [{
                    value: dataItem ? dataItem.value : [0, 0, 0, 0],
                    name: branchName,
                    itemStyle: {
                        color: branchColor
                    },
                    lineStyle: {
                        color: branchColor,
                        width: 0.8
                    },
                    areaStyle: {
                        color: branchColor.replace(')', ', 0.1)').replace('rgb', 'rgba'),
                        opacity: 0.03
                    }
                }]
            };
        });
        
        var patentLevelOption = getRadarBaseOption(patentIndicators, '项');
        patentLevelOption.series = seriesData;
        
        patentLevelChart.setOption(patentLevelOption);
        console.log('专利等级分布雷达图初始化成功');
        
        window.addEventListener('resize', function() {
            patentLevelChart.resize();
        });
    }
} catch (error) {
    console.error('专利等级分布雷达图初始化失败:', error);
}

// 3. 论文等级分布雷达图
try {
    var paperLevelChartDom = document.getElementById('paperLevelChart');
    if (paperLevelChartDom) {
        var paperLevelChart = echarts.init(paperLevelChartDom);
        
        // 论文等级指标（缩短名称）
        var paperIndicators = [
            { name: 'SCI/EI', max: 15 },
            { name: '核心', max: 25 },
            { name: '一般', max: 40 },
            { name: '会议', max: 20 }
        ];
        
        // 分院论文数据（示例数据）
        var paperData = [
            { name: '技术研发中心', value: [12, 18, 25, 15] },
            { name: '信息工程院', value: [8, 15, 20, 10] },
            { name: '调查监测院', value: [5, 12, 18, 8] },
            { name: '海洋院', value: [3, 10, 15, 6] },
            { name: '测绘八院', value: [2, 8, 12, 5] },
            { name: '测绘七院', value: [1, 6, 10, 4] },
            { name: '基础测绘院', value: [1, 5, 8, 3] },
            { name: '测绘四院', value: [0, 3, 6, 2] },
            { name: '测绘三院', value: [0, 2, 4, 1] },
            { name: '滨海院', value: [0, 1, 3, 1] },
            { name: '测绘一院', value: [0, 1, 2, 0] }
        ];
        
        // 创建系列数据
        var seriesData = branches.map(function(branchName) {
            var branchColor = branchColors[branchName];
            var dataItem = paperData.find(function(item) {
                return item.name === branchName;
            });
            
            return {
                name: branchName,
                type: 'radar',
                symbol: 'circle',
                symbolSize: 2,
                lineStyle: {
                    width: 0.8
                },
                itemStyle: {
                    color: branchColor
                },
                data: [{
                    value: dataItem ? dataItem.value : [0, 0, 0, 0],
                    name: branchName,
                    itemStyle: {
                        color: branchColor
                    },
                    lineStyle: {
                        color: branchColor,
                        width: 0.8
                    },
                    areaStyle: {
                        color: branchColor.replace(')', ', 0.1)').replace('rgb', 'rgba'),
                        opacity: 0.03
                    }
                }]
            };
        });
        
        var paperLevelOption = getRadarBaseOption(paperIndicators, '篇');
        paperLevelOption.series = seriesData;
        
        paperLevelChart.setOption(paperLevelOption);
        console.log('论文等级分布雷达图初始化成功');
        
        window.addEventListener('resize', function() {
            paperLevelChart.resize();
        });
    }
} catch (error) {
    console.error('论文等级分布雷达图初始化失败:', error);
}

// 4. 标准等级分布雷达图
try {
    var standardLevelChartDom = document.getElementById('standardLevelChart');
    if (standardLevelChartDom) {
        var standardLevelChart = echarts.init(standardLevelChartDom);
        
        // 标准等级指标（缩短名称）
        var standardIndicators = [
            { name: '国标', max: 5 },
            { name: '行标', max: 10 },
            { name: '地标', max: 15 },
            { name: '团标', max: 8 },
            { name: '企标', max: 20 }
        ];
        
        // 分院标准数据（示例数据）
        var standardData = [
            { name: '技术研发中心', value: [3, 8, 12, 5, 15] },
            { name: '信息工程院', value: [2, 6, 8, 3, 12] },
            { name: '调查监测院', value: [1, 4, 6, 2, 10] },
            { name: '海洋院', value: [1, 3, 5, 1, 8] },
            { name: '测绘八院', value: [0, 2, 4, 1, 6] },
            { name: '测绘七院', value: [0, 1, 3, 0, 5] },
            { name: '基础测绘院', value: [0, 1, 2, 0, 4] },
            { name: '测绘四院', value: [0, 0, 1, 0, 3] },
            { name: '测绘三院', value: [0, 0, 1, 0, 2] },
            { name: '滨海院', value: [0, 0, 0, 0, 1] },
            { name: '测绘一院', value: [0, 0, 0, 0, 1] }
        ];
        
        // 创建系列数据
        var seriesData = branches.map(function(branchName) {
            var branchColor = branchColors[branchName];
            var dataItem = standardData.find(function(item) {
                return item.name === branchName;
            });
            
            return {
                name: branchName,
                type: 'radar',
                symbol: 'circle',
                symbolSize: 2,
                lineStyle: {
                    width: 0.8
                },
                itemStyle: {
                    color: branchColor
                },
                data: [{
                    value: dataItem ? dataItem.value : [0, 0, 0, 0, 0],
                    name: branchName,
                    itemStyle: {
                        color: branchColor
                    },
                    lineStyle: {
                        color: branchColor,
                        width: 0.8
                    },
                    areaStyle: {
                        color: branchColor.replace(')', ', 0.1)').replace('rgb', 'rgba'),
                        opacity: 0.03
                    }
                }]
            };
        });
        
        var standardLevelOption = getRadarBaseOption(standardIndicators, '项');
        standardLevelOption.series = seriesData;
        
        standardLevelChart.setOption(standardLevelOption);
        console.log('标准等级分布雷达图初始化成功');
        
        window.addEventListener('resize', function() {
            standardLevelChart.resize();
        });
    }
} catch (error) {
    console.error('标准等级分布雷达图初始化失败:', error);
}









    // 初始化人才梯队建设图表
    try {
        var talentStructureChartDom = document.getElementById('talentStructureChart');
        if (talentStructureChartDom) {
            var talentStructureChart = echarts.init(talentStructureChartDom);
            var talentStructureOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderColor: '#e5e7eb',
                    borderWidth: 1,
                    textStyle: {
                        color: '#374151'
                    },
                    padding: [12, 16],
                    extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
                },
                legend: {
                    data: ['高级职称', '中级职称', '初级职称'],
                    bottom: 0,
                    textStyle: {
                        fontSize: 12,
                        color: '#6b7280'
                    }
                },
                grid: {
                    left: '1%',
                    right: '1%',
                    bottom: '10%',
                    top: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['技术研发中心', '信息工程院', '调查监测院', '海洋院', '测绘八院', '测绘七院', '基础测绘院', '测绘四院', '测绘三院', '滨海院', '测绘一院'],
                    axisLabel: {
                        interval: 0,
                        rotate: 45,
                        fontSize: 12,
                        color: '#6b7280'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e5e7eb'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '比例',
                    nameLocation: 'middle',
                    nameGap: 40,
                    nameTextStyle: {
                        color: '#6b7280',
                        fontSize: 12
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f3f4f6',
                            type: 'dashed'
                        }
                    }
                },
                series: [
                    {
                        name: '高级职称',
                        type: 'bar',
                        stack: 'total',
                        data: [6, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5],
                        itemStyle: {
                            color: chartColors.primary,
                            borderRadius: [4, 4, 0, 0]
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(30, 136, 229, 0.3)'
                            }
                        }
                    },
                    {
                        name: '中级职称',
                        type: 'bar',
                        stack: 'total',
                        data: [4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0.5, 0.3],
                        itemStyle: {
                            color: chartColors.primaryLight,
                            borderRadius: [0, 0, 0, 0]
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(100, 181, 246, 0.3)'
                            }
                        }
                    },
                    {
                        name: '初级职称',
                        type: 'bar',
                        stack: 'total',
                        data: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.2],
                        itemStyle: {
                            color: chartColors.primaryLighter,
                            borderRadius: [0, 0, 4, 4]
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(187, 222, 251, 0.3)'
                            }
                        }
                    }
                ]
            };
            talentStructureChart.setOption(talentStructureOption);
            console.log('人才梯队建设图表初始化成功');
        }
    } catch (error) {
        console.error('人才梯队建设图表初始化失败:', error);
    }
    


   // 初始化性别比例图表（饼图）
try {
    var genderRatioChartDom = document.getElementById('genderRatioChart');
    if (genderRatioChartDom) {
        var genderRatioChart = echarts.init(genderRatioChartDom);
        
        // 分院名称和位置配置
        var branchConfig = [
            { name: '技术研发中心', center: ['10%', '15%'], labelPos: ['4%', '28%'] },
            { name: '信息工程院', center: ['30%', '15%'], labelPos: ['25%', '28%'] },
            { name: '调查监测院', center: ['50%', '15%'], labelPos: ['45%', '28%'] },
            { name: '海洋院', center: ['70%', '15%'], labelPos: ['67%', '28%'] },
            { name: '测绘八院', center: ['90%', '15%'], labelPos: ['86%', '28%'] },
            { name: '测绘七院', center: ['10%', '50%'], labelPos: ['6%', '63%'] },
            { name: '基础测绘院', center: ['30%', '50%'], labelPos: ['25%', '63%'] },
            { name: '测绘四院', center: ['50%', '50%'], labelPos: ['46%', '63%'] },
            { name: '测绘三院', center: ['70%', '50%'], labelPos: ['66%', '63%'] },
            { name: '滨海院', center: ['90%', '50%'], labelPos: ['87%','63%'] },
            { name: '测绘一院', center: ['50%', '85%'], labelPos: ['46%', '96%'] }
        ];
        
        // 平均年龄数据（每个分院的男性和女性平均年龄，以及总平均年龄）
        var avgAgeData = [
            { total: 38.2, male: 39.5, female: 36.2 },  // 技术研发中心
            { total: 36.5, male: 37.8, female: 34.5 },  // 信息工程院
            { total: 37.8, male: 38.5, female: 36.8 },  // 调查监测院
            { total: 35.4, male: 36.2, female: 34.1 },  // 海洋院
            { total: 39.1, male: 40.1, female: 37.6 },  // 测绘八院
            { total: 34.6, male: 35.8, female: 33.1 },  // 测绘七院
            { total: 40.2, male: 41.5, female: 38.2 },  // 基础测绘院
            { total: 36.9, male: 38.2, female: 35.1 },  // 测绘四院
            { total: 37.5, male: 38.9, female: 35.5 },  // 测绘三院
            { total: 35.8, male: 37.1, female: 34.0 },  // 滨海院
            { total: 38.6, male: 39.8, female: 36.9 }   // 测绘一院
        ];
        
        // 性别数据
        var genderData = [
            { male: 65, female: 35 },
            { male: 60, female: 40 },
            { male: 55, female: 45 },
            { male: 52, female: 48 },
            { male: 50, female: 50 },
            { male: 48, female: 52 },
            { male: 51, female: 49 },
            { male: 49, female: 51 },
            { male: 53, female: 47 },
            { male: 47, female: 53 },
            { male: 50, female: 50 }
        ];
        
        // 创建系列
        var seriesData = [];
        var graphicElements = [];
        
        for (var i = 0; i < branchConfig.length; i++) {
            var config = branchConfig[i];
            var data = genderData[i];
            var avgAge = avgAgeData[i];
            
            // 添加饼图系列
            seriesData.push({
                name: config.name,
                type: 'pie',
                radius: ['15%', '20%'],
                center: config.center,
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    formatter: avgAge.total + '岁',  // 显示总平均年龄
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#1e293b'
                },
                emphasis: {
                    scale: true,
                    scaleSize: 10,
                    label: {
                        show: true,
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: '#1e293b',
                        formatter: avgAge.total + '岁'  // 悬停时也显示总平均年龄
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: data.male, name: '男性', itemStyle: { color: chartColors.primary } },
                    { value: data.female, name: '女性', itemStyle: { color: '#bbdefb' } }
                ],
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }
            });
            
            // 添加分院名称标签
            graphicElements.push({
                type: 'text',
                left: config.labelPos[0],
                top: config.labelPos[1],
                style: {
                    text: config.name,
                    fontSize: 12,
                    textAlign: 'center',
                    fill: '#6b7280',
                    fontWeight: '500'
                }
            });
        }
        
        var genderRatioOption = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    var currentIndex = branchConfig.findIndex(function(cfg) {
                        return cfg.name === params.seriesName;
                    });
                    var avgAge = avgAgeData[currentIndex];
                    var genderAge = params.name === '男性' ? avgAge.male : avgAge.female;
                    
                    return '<div style="font-weight: bold; margin-bottom: 8px;">' + params.seriesName + '</div>' +
                           '<div style="display: flex; justify-content: space-between; margin-bottom: 4px;">' +
                           '<span>' + params.name + ': </span>' +
                           '<span style="font-weight: bold;">' + params.value + '%</span>' +
                           '</div>' +
                           '<div style="display: flex; justify-content: space-between; margin-bottom: 4px;">' +
                           '<span>' + params.name + '平均年龄: </span>' +
                           '<span style="font-weight: bold;">' + genderAge + '岁</span>' +
                           '</div>'; 
                           
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
            },
            legend: {
                orient: 'horizontal',
                left: 'right',
                top: '95%',
                data: ['男性', '女性'],
                textStyle: {
                    color: '#6b7280',
                    fontSize: 12
                },
                itemWidth: 12,
                itemHeight: 12
            },
            graphic: graphicElements,
            series: seriesData
        };
        
        genderRatioChart.setOption(genderRatioOption);
        console.log('性别比例图表（带平均年龄）初始化成功');
    }
} catch (error) {
    console.error('性别比例图表初始化失败:', error);
}
    
    
    
    // 初始化学历分布图表
    try {
        var educationChartDom = document.getElementById('educationChart');
        if (educationChartDom) {
            var educationChart = echarts.init(educationChartDom);
            var educationOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderColor: '#e5e7eb',
                    borderWidth: 1,
                    textStyle: {
                        color: '#374151'
                    },
                    padding: [12, 16],
                    extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
                },
                legend: {
                    data: ['博士', '硕士', '本科'],
                    bottom: 0,
                    textStyle: {
                        fontSize: 12,
                        color: '#6b7280'
                    },
                    itemWidth: 12,
                    itemHeight: 12
                },
                grid: {
                    left: '1%',
                    right: '1%',
                    bottom: '10%',
                    top: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['技术研发中心', '信息工程院', '调查监测院', '海洋院', '测绘八院', '测绘七院', '基础测绘院', '测绘四院', '测绘三院', '滨海院', '测绘一院'],
                    axisLabel: {
                        interval: 0,
                        rotate: 45,
                        fontSize: 12,
                        color: '#6b7280'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e5e7eb'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '人数',
                    nameLocation: 'middle',
                    nameGap: 40,
                    nameTextStyle: {
                        color: '#6b7280',
                        fontSize: 12
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f3f4f6',
                            type: 'dashed'
                        }
                    }
                },
                series: [
                    {
                        name: '博士',
                        type: 'bar',
                        data: [15, 10, 5, 3, 2, 1, 1, 0, 0, 0, 0],
                        itemStyle: {
                            color: '#0d47a1', // 深蓝
                            borderRadius: [4, 4, 0, 0]
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(13, 71, 161, 0.3)'
                            }
                        }
                    },
                    {
                        name: '硕士',
                        type: 'bar',
                        data: [35, 30, 20, 15, 10, 8, 5, 3, 2, 2, 1],
                        itemStyle: {
                            color: '#1e88e5', // 主蓝
                            borderRadius: [4, 4, 0, 0]
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(30, 136, 229, 0.3)'
                            }
                        }
                    },
                    {
                        name: '本科',
                        type: 'bar',
                        data: [25, 30, 35, 32, 28, 25, 20, 17, 15, 13, 12],
                        itemStyle: {
                            color: '#64b5f6', // 浅蓝
                            borderRadius: [4, 4, 0, 0]
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(100, 181, 246, 0.3)'
                            }
                        }
                    }
                ]
            };
            educationChart.setOption(educationOption);
            console.log('学历分布图表初始化成功');
        }
    } catch (error) {
        console.error('学历分布图表初始化失败:', error);
    }
    
    // 初始化创新项目投入图表
    try {
        var innovationProjectsChartDom = document.getElementById('innovationProjectsChart');
        if (innovationProjectsChartDom) {
            var innovationProjectsChart = echarts.init(innovationProjectsChartDom);
            var innovationProjectsOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: function(params) {
                        var result = params[0].name + '<br/>';
                        var total = 0;
                        for (var i = 0; i < params.length; i++) {
                            result += params[i].marker + params[i].seriesName + ': ' + params[i].value + '项<br/>';
                            total += params[i].value;
                        }
                        result += '<b>总计: ' + total + '项</b>';
                        return result;
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderColor: '#e5e7eb',
                    borderWidth: 1,
                    textStyle: {
                        color: '#374151'
                    },
                    padding: [12, 16],
                    extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
                },
                legend: {
                    data: ['AI方向', '低空方向', '信息化方向'],
                    top: 0,
                    textStyle: {
                        fontSize: 12,
                        color: '#6b7280'
                    },
                    itemWidth: 12,
                    itemHeight: 12
                },
                grid: {
                    left: '1%',
                    right: '1%',
                    bottom: '10%',
                    top: '8%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    name: '项目数量（项）',
                    nameLocation: 'middle',
                    nameGap: 25,
                    nameTextStyle: {
                        color: '#6b7280',
                        fontSize: 12
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f3f4f6',
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['测绘一院', '滨海院', '测绘三院', '测绘四院', '基础测绘院', '测绘七院', '测绘八院', '海洋院', '调查监测院', '信息工程院', '技术研发中心'],
                    axisLabel: {
                        interval: 0,
                        fontSize: 12,
                        color: '#6b7280'
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        name: 'AI方向',
                        type: 'bar',
                        stack: 'total',
                        data: [0, 0, 1, 1, 1, 2, 2, 2, 3, 5, 8],
                        itemStyle: {
                            color: chartColors.primary,
                            borderRadius: [0, 4, 4, 0]
                        },
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{c}',
                            color: '#ffffff',
                            fontSize: 12
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(30, 136, 229, 0.3)'
                            }
                        }
                    },
                    {
                        name: '低空方向',
                        type: 'bar',
                        stack: 'total',
                        data: [0, 1, 1, 2, 2, 2, 3, 4, 6, 3, 5],
                        itemStyle: {
                            color: chartColors.primaryLight,
                            borderRadius: [0, 4, 4, 0]
                        },
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{c}',
                            color: '#ffffff',
                            fontSize: 12
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(100, 181, 246, 0.3)'
                            }
                        }
                    },
                    {
                        name: '信息化方向',
                        type: 'bar',
                        stack: 'total',
                        data: [1, 1, 2, 2, 3, 3, 4, 4, 3, 7, 9],
                        itemStyle: {
                            color: chartColors.primaryLighter,
                            borderRadius: [0, 4, 4, 0]
                        },
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{c}',
                            color: '#ffffff',
                            fontSize: 12
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(187, 222, 251, 0.3)'
                            }
                        }
                    }
                ]
            };
            innovationProjectsChart.setOption(innovationProjectsOption);
            console.log('创新项目投入图表初始化成功');
        }
    } catch (error) {
        console.error('创新项目投入图表初始化失败:', error);
    }
    
    // 初始化创新平台数量图表
    try {
        var innovationPlatformsChartDom = document.getElementById('innovationPlatformsChart');
        if (innovationPlatformsChartDom) {
            var innovationPlatformsChart = echarts.init(innovationPlatformsChartDom);
            var innovationPlatformsOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: '{b}: {c}个',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderColor: '#e5e7eb',
                    borderWidth: 1,
                    textStyle: {
                        color: '#374151'
                    },
                    padding: [12, 16],
                    extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
                },
                grid: {
                    left: '1%',
                    right: '1%',
                    bottom: '10%',
                    top: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['技术研发中心', '信息工程院', '调查监测院', '海洋院', '测绘八院', '测绘七院', '基础测绘院', '测绘四院', '测绘三院', '滨海院', '测绘一院'],
                    axisLabel: {
                        interval: 0,
                        rotate: 45,
                        fontSize: 12,
                        color: '#6b7280'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e5e7eb'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '创新平台数量（个）',
                    nameLocation: 'middle',
                    nameGap: 30,
                    min: 0,
                    max: 6,
                    interval: 1,
                    nameTextStyle: {
                        color: '#6b7280',
                        fontSize: 12
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f3f4f6',
                            type: 'dashed'
                        }
                    }
                },
                series: [
                    {
                        name: '创新平台数量',
                        type: 'bar',
                        data: [5, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1],
                        itemStyle: {
                            color: function(params) {
                                // 使用统一的蓝色系渐变
                                var blueColors = [
                                    '#0a3880','#0d47a1','#1565c0','#1976d2',
                                    '#1e88e5','#2196f3', '#42a5f5', '#64b5f6',
                                    '#90caf9','#bbdefb','#e3f2fd'
                                 
                                ];
                                return blueColors[params.dataIndex];
                            },
                            borderRadius: [4, 4, 0, 0]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}个',
                            color: '#374151',
                            fontSize: 12
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ],
                            lineStyle: {
                                color: chartColors.accent,
                                type: 'dashed',
                                width: 2
                            },
                            label: {
                                formatter: '平均值: {c}个',
                                position: 'end',
                                distance: 8,
                                offset: [-90, -15],
                                color: chartColors.accent,
                                fontSize: 12
                            }
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(30, 136, 229, 0.3)'
                            }
                        }
                    }
                ]
            };
            innovationPlatformsChart.setOption(innovationPlatformsOption);
            console.log('创新平台数量图表初始化成功');
        }
    } catch (error) {
        console.error('创新平台数量图表初始化失败:', error);
    }
    
    console.log('所有图表初始化完成');
}

// 使用更可靠的初始化方式
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts);
} else {
    // DOM已经加载完成
    setTimeout(initCharts, 100);
}

// 响应窗口大小变化
window.addEventListener('resize', function() {
    // 图表会自动处理重绘
});