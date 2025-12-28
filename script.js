// ==================== 数据定义 ====================

// 激励名言库 - 诗剑行版（扩充）
const quotes = [
    "大鹏一日同风起，扶摇直上九万里。",
    "长风破浪会有时，直挂云帆济沧海。",
    "天生我材必有用，千金散尽还复来。",
    "仰天大笑出门去，我辈岂是蓬蒿人。",
    "黄沙百战穿金甲，不破楼兰终不还。",
    "男儿何不带吴钩，收取关山五十州。",
    "路漫漫其修远兮，吾将上下而求索。",
    "宝剑锋从磨砺出，梅花香自苦寒来。",
    "千磨万击还坚劲，任尔东西南北风。",
    "古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。",
    "会当凌绝顶，一览众山小。",
    "莫愁前路无知己，天下谁人不识君。",
    "读书破万卷，下笔如有神。",
    "纸上得来终觉浅，绝知此事要躬行。",
    "侠之大者，为国为民；码之大者，为优为简。",
    "博观而约取，厚积而薄发。",
    "不积跬步，无以至千里。",
    "书山有路勤为径，学海无涯苦作舟。",
    "三更灯火五更鸡，正是男儿读书时。",
    "十年磨一剑，霜刃未曾试。",
    "欲穷千里目，更上一层楼。",
    "天行健，君子以自强不息。"
];

// 打卡激励语
const checkinMotivations = [
    "今日点卯，剑意又精进一分！",
    "坚持就是胜利，侠之大者！",
    "每日修行，终成大器！",
    "好习惯成就好人生！",
    "今日的你已超越昨日！",
    "千里之行，始于足下！",
    "滴水穿石，功到自然成！"
];

// 成就系统定义 - 武侠版（扩充）
const achievementsData = [
    { id: 'first-step', icon: '👣', name: '初涉江湖', desc: '完成首次打卡', requirement: 'checkin', value: 1 },
    { id: 'week-warrior', icon: '🔥', name: '闻鸡起舞', desc: '连续打卡7天', requirement: 'streak', value: 7 },
    { id: 'half-month', icon: '⭐', name: '半月修行', desc: '连续打卡15天', requirement: 'streak', value: 15 },
    { id: 'month-master', icon: '👑', name: '寒窗苦读', desc: '连续打卡30天', requirement: 'streak', value: 30 },
    { id: 'quarter-legend', icon: '🌟', name: '季度传奇', desc: '连续打卡90天', requirement: 'streak', value: 90 },
    { id: 'hour-hero', icon: '⏰', name: '面壁图破', desc: '累计修行5时辰（10小时）', requirement: 'hours', value: 5 },
    { id: 'study-marathon', icon: '🏃', name: '磨穿铁砚', desc: '累计修行25时辰（50小时）', requirement: 'hours', value: 25 },
    { id: 'century-scholar', icon: '📚', name: '一代宗师', desc: '累计修行50时辰（100小时）', requirement: 'hours', value: 50 },
    { id: 'legendary', icon: '🏆', name: '万古流芳', desc: '累计修行250时辰（500小时）', requirement: 'hours', value: 250 },
    { id: 'cs-basics', icon: '👊', name: '内功深厚', desc: '内功心法修行10时辰（20小时）', requirement: 'path-cs-basics', value: 10 },
    { id: 'ai-expert', icon: '🗡️', name: '剑意通天', desc: '万剑归宗修行10时辰（20小时）', requirement: 'path-llm', value: 10 },
    { id: 'rl-master', icon: '⚔️', name: '独孤求败', desc: '独孤九剑修行10时辰（20小时）', requirement: 'path-rl', value: 10 },
    { id: 'first-task', icon: '📋', name: '初立誓愿', desc: '完成首个任务', requirement: 'task', value: 1 },
    { id: 'task-master', icon: '✅', name: '言出必行', desc: '累计完成50个任务', requirement: 'task', value: 50 },
    { id: 'note-taker', icon: '📝', name: '笔耕不辍', desc: '记录10条札记', requirement: 'notes', value: 10 }
];

// 境界系统定义（扩充）
const realmLevels = [
    { name: '江湖小虾', exp: 0, icon: '🦐', title: '初入江湖', color: '#888' },
    { name: '初窥门径', exp: 2.5, icon: '🐣', title: '已入门墙', color: '#6b7280' },      // 5小时 = 2.5时辰
    { name: '略有小成', exp: 10, icon: '🐤', title: '稍有心得', color: '#059669' },      // 20小时 = 10时辰
    { name: '融会贯通', exp: 25, icon: '🦅', title: '触类旁通', color: '#0891b2' },      // 50小时 = 25时辰
    { name: '炉火纯青', exp: 50, icon: '🔥', title: '技艺精湛', color: '#d97706' },      // 100小时 = 50时辰
    { name: '登峰造极', exp: 100, icon: '⛰️', title: '造诣非凡', color: '#7c3aed' },    // 200小时 = 100时辰
    { name: '一代宗师', exp: 250, icon: '🧙', title: '开宗立派', color: '#db2777' },     // 500小时 = 250时辰
    { name: '陆地神仙', exp: 500, icon: '🌟', title: '传说人物', color: '#f59e0b' },    // 1000小时 = 500时辰
    { name: '天人合一', exp: 1000, icon: '🌙', title: '超凡入圣', color: '#6366f1' }    // 2000小时 = 1000时辰
];

// 奇遇事件库（大幅扩充）
const adventures = [
    { text: "偶遇世外高人指点迷津，顿悟心法。", icon: "👴", type: "wisdom" },
    { text: "在山洞中发现一本残缺剑谱，获益良多。", icon: "📜", type: "treasure" },
    { text: "观瀑布飞流直下，领悟剑意。", icon: "🌊", type: "enlightenment" },
    { text: "与路过的侠客切磋武艺，略有心得。", icon: "⚔️", type: "practice" },
    { text: "打坐时灵台清明，内力大增。", icon: "🧘", type: "meditation" },
    { text: "救下一只受伤的灵狐，获赠灵草。", icon: "🦊", type: "karma" },
    { text: "在旧书摊淘到一本绝世秘籍。", icon: "📚", type: "treasure" },
    { text: "夜观天象，参透一丝天机。", icon: "🌙", type: "enlightenment" },
    { text: "于茶馆偶遇隐士，倾囊相授。", icon: "🍵", type: "wisdom" },
    { text: "闯入秘境，获得前人遗宝。", icon: "💎", type: "treasure" },
    { text: "在竹林中静坐，心如止水。", icon: "🎋", type: "meditation" },
    { text: "解救被困村民，获得祝福。", icon: "🙏", type: "karma" },
    { text: "路遇奇书商，以茶换得典籍。", icon: "📖", type: "treasure" },
    { text: "月下舞剑，剑意通明。", icon: "🌕", type: "practice" },
    { text: "梦中与先贤对话，醍醐灌顶。", icon: "💭", type: "enlightenment" }
];

// 每日箴言（根据时间段）
const dailyWisdom = {
    morning: [
        "一日之计在于晨，正是修行好时光。",
        "晨起练剑，精神抖擞。",
        "早起的侠客有更多机遇。"
    ],
    afternoon: [
        "日中修行，正当其时。",
        "午后静坐，养精蓄锐。",
        "功夫不负有心人。"
    ],
    evening: [
        "夜深人静，正好悟道。",
        "灯火阑珊，书卷相伴。",
        "今日事今日毕，明朝更上一层楼。"
    ]
};

// ==================== 类定义 ====================

// 设置管理
class Settings {
    constructor() {
        this.settings = this.loadSettings();
    }

    loadSettings() {
        const defaultSettings = {
            soundEnabled: true,
            breakReminder: true,
            breakInterval: 45,
            dailyGoal: 2,
            autoBackupReminder: true,
            lastBackupDate: null
        };
        const saved = localStorage.getItem('studySettings');
        return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    }

    save() {
        localStorage.setItem('studySettings', JSON.stringify(this.settings));
    }
}

// 数据存储
class DataStore {
    constructor() {
        this.data = this.loadData();
        this.checkBackupReminder();
    }

    loadData() {
        const defaultData = {
            totalHours: 0,
            weekHours: 0,
            lastWeekReset: new Date().toISOString(),
            checkinStreak: 0,
            maxStreak: 0,
            totalCheckinDays: 0,
            lastCheckin: null,
            unlockedAchievements: [],
            learningPaths: {
                'cs-basics': 0,
                'llm': 0,
                'rl': 0
            },
            dailyHistory: {},
            todayStudied: 0,
            lastStudyDate: null,
            totalTasksCompleted: 0,
            totalSessions: 0,
            longestSession: 0,
            achievementUnlockTimes: {}, // 成就解锁时间记录
            totalPomodoros: 0 // 番茄钟计数
        };
        
        const saved = localStorage.getItem('studyData');
        if (saved) {
            const parsed = JSON.parse(saved);
            
            const lastReset = new Date(parsed.lastWeekReset);
            const now = new Date();
            const weekDiff = Math.floor((now - lastReset) / (7 * 24 * 60 * 60 * 1000));
            if (weekDiff >= 1) {
                parsed.weekHours = 0;
                parsed.lastWeekReset = now.toISOString();
            }
            
            const today = new Date().toDateString();
            const lastDate = parsed.lastStudyDate ? new Date(parsed.lastStudyDate).toDateString() : null;
            if (lastDate !== today) {
                parsed.todayStudied = 0;
                parsed.lastStudyDate = new Date().toISOString();
            }
            
            return { ...defaultData, ...parsed };
        }
        return defaultData;
    }

    saveData() {
        localStorage.setItem('studyData', JSON.stringify(this.data));
    }

    addStudyTime(path, minutes) {
        const shichen = minutes / 120; // 1时辰 = 2小时 = 120分钟
        this.data.totalHours += shichen;
        this.data.weekHours += shichen;
        this.data.todayStudied += shichen;
        this.data.totalSessions++;
        
        if (minutes > this.data.longestSession) {
            this.data.longestSession = minutes;
        }
        
        const today = new Date().toISOString().split('T')[0];
        this.data.dailyHistory[today] = (this.data.dailyHistory[today] || 0) + shichen;
        this.data.lastStudyDate = new Date().toISOString();
        
        if (path && this.data.learningPaths[path] !== undefined) {
            this.data.learningPaths[path] += shichen;
        }
        
        this.saveData();
        this.checkAchievements();
        this.updateUI();
        updateGoalProgress();
        updateHeatmap();
        updateChart();
        
        if (typeof realmSystem !== 'undefined') {
            realmSystem.updateRealm();
        }
    }

    checkin() {
        const today = new Date().toDateString();
        const lastCheckinDate = this.data.lastCheckin ? new Date(this.data.lastCheckin).toDateString() : null;
        
        if (lastCheckinDate === today) {
            return { success: false, message: '今日已经点卯过了！', alreadyChecked: true };
        }
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayDate = yesterday.toDateString();
        
        if (lastCheckinDate === yesterdayDate) {
            this.data.checkinStreak++;
        } else if (lastCheckinDate !== today) {
            this.data.checkinStreak = 1;
        }
        
        if (this.data.checkinStreak > this.data.maxStreak) {
            this.data.maxStreak = this.data.checkinStreak;
        }
        
        this.data.totalCheckinDays++;
        this.data.lastCheckin = new Date().toISOString();
        this.saveData();
        this.checkAchievements();
        this.updateUI();
        
        const motivation = checkinMotivations[Math.floor(Math.random() * checkinMotivations.length)];
        return { 
            success: true, 
            message: `🎉 ${motivation}`,
            streak: this.data.checkinStreak 
        };
    }

    checkAchievements() {
        const newlyUnlocked = [];
        
        achievementsData.forEach(achievement => {
            if (this.data.unlockedAchievements.includes(achievement.id)) return;
            
            let unlocked = false;
            switch(achievement.requirement) {
                case 'checkin':
                    unlocked = this.data.totalCheckinDays >= achievement.value;
                    break;
                case 'streak':
                    unlocked = this.data.checkinStreak >= achievement.value;
                    break;
                case 'hours':
                    unlocked = this.data.totalHours >= achievement.value;
                    break;
                case 'task':
                    unlocked = this.data.totalTasksCompleted >= achievement.value;
                    break;
                case 'notes':
                    const notes = JSON.parse(localStorage.getItem('studyNotes') || '[]');
                    unlocked = notes.length >= achievement.value;
                    break;
                default:
                    if (achievement.requirement.startsWith('path-')) {
                        const pathKey = achievement.requirement.replace('path-', '');
                        unlocked = this.data.learningPaths[pathKey] >= achievement.value;
                    }
            }
            
            if (unlocked) {
                this.data.unlockedAchievements.push(achievement.id);
                // 记录解锁时间
                if (!this.data.achievementUnlockTimes) {
                    this.data.achievementUnlockTimes = {};
                }
                this.data.achievementUnlockTimes[achievement.id] = new Date().toISOString();
                newlyUnlocked.push(achievement);
            }
        });
        
        this.saveData();
        
        // 显示解锁动画
        newlyUnlocked.forEach((achievement, index) => {
            setTimeout(() => {
                showAchievementUnlock(achievement);
            }, index * 1500);
        });
    }

    checkBackupReminder() {
        if (!settings.settings.autoBackupReminder) return;
        
        const lastBackup = settings.settings.lastBackupDate;
        if (!lastBackup) return;
        
        const daysSinceBackup = Math.floor((new Date() - new Date(lastBackup)) / (24 * 60 * 60 * 1000));
        if (daysSinceBackup >= 7) {
            setTimeout(() => {
                showNotification('📦 已超过7天未备份，建议导出数据！', 'warning');
            }, 3000);
        }
    }

    exportData() {
        const dataStr = JSON.stringify({
            studyData: this.data,
            settings: settings.settings,
            dailyPlan: JSON.parse(localStorage.getItem('dailyPlan') || '{}'),
            notes: JSON.parse(localStorage.getItem('studyNotes') || '[]')
        }, null, 2);
        
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `墨池剑冢_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        settings.settings.lastBackupDate = new Date().toISOString();
        settings.save();
    }

    importData(jsonData) {
        try {
            const imported = JSON.parse(jsonData);
            
            if (imported.studyData) {
                this.data = { ...this.data, ...imported.studyData };
                this.saveData();
            }
            
            if (imported.settings) {
                settings.settings = { ...settings.settings, ...imported.settings };
                settings.save();
            }
            
            if (imported.dailyPlan) {
                localStorage.setItem('dailyPlan', JSON.stringify(imported.dailyPlan));
            }
            
            if (imported.notes) {
                localStorage.setItem('studyNotes', JSON.stringify(imported.notes));
            }
            
            this.updateUI();
            return true;
        } catch (e) {
            console.error('导入失败:', e);
            return false;
        }
    }

    clearAllData() {
        if (confirm('⚠️ 确定要火烧连营吗？此操作不可恢复！')) {
            if (confirm('🔥 最后确认：所有修行记录都将化为灰烬！')) {
                localStorage.removeItem('studyData');
                localStorage.removeItem('dailyPlan');
                localStorage.removeItem('studyNotes');
                localStorage.removeItem('studySettings');
                location.reload();
            }
        }
    }

    updateUI() {
        const totalHoursEl = document.getElementById('totalHours');
        const thisWeekEl = document.getElementById('thisWeek');
        const achievementsEl = document.getElementById('achievements');
        
        if (totalHoursEl) totalHoursEl.textContent = this.data.totalHours.toFixed(1);
        if (thisWeekEl) thisWeekEl.textContent = this.data.weekHours.toFixed(1);
        if (achievementsEl) achievementsEl.textContent = this.data.unlockedAchievements.length;
        
        document.getElementById('currentStreak').textContent = this.data.checkinStreak;
        document.getElementById('totalDays').textContent = this.data.totalCheckinDays;
        
        const maxStreakEl = document.getElementById('maxStreak');
        if (maxStreakEl) maxStreakEl.textContent = this.data.maxStreak;
        
        if (this.data.lastCheckin) {
            const lastDate = new Date(this.data.lastCheckin);
            document.getElementById('lastCheckin').textContent = lastDate.toLocaleDateString('zh-CN');
        }
        
        Object.keys(this.data.learningPaths).forEach(path => {
            const hours = this.data.learningPaths[path];
            const progressBar = document.querySelector(`[data-progress="${path}"]`);
            const progressNum = document.querySelector(`[data-num="${path}"]`);
            
            if (progressBar && progressNum) {
                progressNum.textContent = hours.toFixed(1);
                const percentage = Math.min((hours / 100) * 100, 100);
                progressBar.style.width = percentage + '%';
            }
        });
        
        renderAchievements();
    }
}

// 境界系统
class RealmSystem {
    constructor() {
        this.currentLevel = 0;
        this.previousLevel = 0;
    }

    updateRealm() {
        const totalHours = dataStore.data.totalHours;
        let levelIndex = 0;
        
        for (let i = realmLevels.length - 1; i >= 0; i--) {
            if (totalHours >= realmLevels[i].exp) {
                levelIndex = i;
                break;
            }
        }
        
        // 检测是否升级
        if (levelIndex > this.currentLevel && this.currentLevel > 0) {
            this.showBreakthroughAnimation(realmLevels[levelIndex]);
        }
        
        this.previousLevel = this.currentLevel;
        this.currentLevel = levelIndex;
        this.render();
    }
    
    showBreakthroughAnimation(newLevel) {
        const overlay = document.createElement('div');
        overlay.className = 'breakthrough-overlay';
        overlay.innerHTML = `
            <div class="breakthrough-content">
                <div class="breakthrough-flash"></div>
                <div class="breakthrough-icon">${newLevel.icon}</div>
                <h2 class="breakthrough-title">境界突破！</h2>
                <p class="breakthrough-realm">${newLevel.name}</p>
                <p class="breakthrough-subtitle">${newLevel.title}</p>
                <button class="btn-breakthrough-close">继续修行</button>
            </div>
        `;
        document.body.appendChild(overlay);
        
        // 播放音效
        if (settings.settings.soundEnabled) {
            this.playBreakthroughSound();
        }
        
        overlay.querySelector('.btn-breakthrough-close').addEventListener('click', () => {
            overlay.classList.add('fade-out');
            setTimeout(() => overlay.remove(), 500);
        });
        
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                overlay.classList.add('fade-out');
                setTimeout(() => overlay.remove(), 500);
            }
        }, 5000);
    }
    
    playBreakthroughSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const notes = [523.25, 659.25, 783.99, 1046.50];
            
            notes.forEach((freq, i) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = freq;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + i * 0.15);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.15 + 0.3);
                
                oscillator.start(audioContext.currentTime + i * 0.15);
                oscillator.stop(audioContext.currentTime + i * 0.15 + 0.3);
            });
        } catch (e) {}
    }
    
    render() {
        const level = realmLevels[this.currentLevel];
        const nextLevel = realmLevels[this.currentLevel + 1];
        const currentExp = dataStore.data.totalHours;
        
        const realmNameEl = document.getElementById('currentRealm');
        const realmIconEl = document.querySelector('.realm-icon');
        const expDisplayEl = document.getElementById('totalExpDisplay');
        const nextExpEl = document.getElementById('nextLevelExp');
        const barFillEl = document.getElementById('realmBarFill');
        
        if (realmNameEl) {
            realmNameEl.textContent = level.name;
            realmNameEl.style.color = level.color;
        }
        if (realmIconEl) realmIconEl.textContent = level.icon;
        if (expDisplayEl) expDisplayEl.textContent = currentExp.toFixed(1);
        
        let progress = 0;
        if (nextLevel) {
            const prevExp = level.exp;
            const nextExp = nextLevel.exp;
            progress = ((currentExp - prevExp) / (nextExp - prevExp)) * 100;
            progress = Math.min(100, Math.max(0, progress));
            if (nextExpEl) nextExpEl.textContent = (nextExp - currentExp).toFixed(1);
        } else {
            progress = 100;
            if (nextExpEl) nextExpEl.textContent = '已满';
        }
        
        if (barFillEl) barFillEl.style.width = `${progress}%`;
    }
}

// 每日计划
class DailyPlan {
    constructor() {
        this.tasks = [];
        this.planHistory = {};
        this.loadPlan();
    }

    loadPlan() {
        const saved = localStorage.getItem('dailyPlan');
        if (saved) {
            const data = JSON.parse(saved);
            const today = new Date().toISOString().split('T')[0];
            
            if (data.date !== today) {
                if (data.date && data.tasks && data.tasks.length > 0) {
                    this.planHistory = data.planHistory || {};
                    this.planHistory[data.date] = {
                        tasks: data.tasks,
                        completed: data.tasks.filter(t => t.completed).length,
                        total: data.tasks.length
                    };
                }
                this.tasks = [];
                this.date = today;
            } else {
                this.tasks = data.tasks || [];
                this.date = data.date;
                this.planHistory = data.planHistory || {};
            }
        } else {
            this.date = new Date().toISOString().split('T')[0];
        }
        this.save();
    }

    save() {
        localStorage.setItem('dailyPlan', JSON.stringify({
            date: this.date,
            tasks: this.tasks,
            planHistory: this.planHistory
        }));
    }

    addTask(text, difficulty = 'normal', priority = 'medium', tags = []) {
        if (!text || text.trim() === '') return false;
        
        this.tasks.push({
            id: Date.now(),
            text: text.trim(),
            difficulty: difficulty,
            priority: priority,
            tags: tags,
            completed: false,
            createdAt: new Date().toISOString()
        });
        
        this.sortTasks();
        this.save();
        return true;
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
        this.save();
    }

    toggleTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            if (task.completed) {
                dataStore.data.totalTasksCompleted++;
                dataStore.saveData();
                dataStore.checkAchievements();
            }
            this.save();
        }
    }

    sortTasks() {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        this.tasks.sort((a, b) => {
            if (a.completed !== b.completed) return a.completed ? 1 : -1;
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
    }

    clearCompleted() {
        this.tasks = this.tasks.filter(t => !t.completed);
        this.save();
    }

    clearAll() {
        if (confirm('确定要焚毁所有卷轴吗？')) {
            this.tasks = [];
            this.save();
            return true;
        }
        return false;
    }

    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const rate = total > 0 ? Math.round((completed / total) * 100) : 0;
        return { total, completed, rate };
    }
    
    isAllCompleted() {
        return this.tasks.length > 0 && this.tasks.every(t => t.completed);
    }
}

// 学习计时器
class StudyTimer {
    constructor() {
        this.initialMinutes = 25;
        this.totalSeconds = 25 * 60;
        this.isRunning = false;
        this.interval = null;
        this.selectedPath = null;
        this.elapsedMinutes = 0;
        this.breakReminderInterval = null;
        this.mode = 'normal'; // normal 或 pomodoro
        this.pomodoroCount = 0; // 番茄钟计数
        this.pomodoroPhase = 'work'; // work 或 break
        this.workDuration = 25 * 60; // 工作时长（25分钟）
        this.breakDuration = 5 * 60; // 休息时长（5分钟）
    }

    setTime(minutes) {
        if (!this.isRunning) {
            this.initialMinutes = minutes;
            this.totalSeconds = minutes * 60;
            this.updateDisplay();
        }
    }

    start() {
        if (!this.selectedPath) {
            showNotification('请先选择修行心法！', 'warning');
            return;
        }
        
        if (!this.isRunning) {
            this.isRunning = true;
            document.getElementById('startBtn').style.display = 'none';
            document.getElementById('pauseBtn').style.display = 'inline-block';
            
            // 启动休息提醒
            if (settings.settings.breakReminder) {
                this.startBreakReminder();
            }
            
            this.interval = setInterval(() => {
                if (this.totalSeconds > 0) {
                    this.totalSeconds--;
                    this.elapsedMinutes = this.initialMinutes - (this.totalSeconds / 60);
                    this.updateDisplay();
                } else {
                    this.complete();
                }
            }, 1000);
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.interval);
            this.clearBreakReminder();
            document.getElementById('startBtn').style.display = 'inline-block';
            document.getElementById('pauseBtn').style.display = 'none';
        }
    }

    reset() {
        this.pause();
        this.setTime(this.initialMinutes);
        this.elapsedMinutes = 0;
        document.getElementById('startBtn').style.display = 'inline-block';
        document.getElementById('pauseBtn').style.display = 'none';
    }
    
    startBreakReminder() {
        const interval = settings.settings.breakInterval * 60 * 1000;
        this.breakReminderInterval = setInterval(() => {
            if (this.isRunning) {
                showNotification('⏰ 已修行较长时间，请注意休息！', 'info');
                if (settings.settings.soundEnabled) {
                    this.playReminderSound();
                }
            }
        }, interval);
    }
    
    clearBreakReminder() {
        if (this.breakReminderInterval) {
            clearInterval(this.breakReminderInterval);
            this.breakReminderInterval = null;
        }
    }
    
    playReminderSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 440;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {}
    }

    complete() {
        this.pause();
        const studiedMinutes = this.initialMinutes;
        
        // 番茄钟模式处理
        if (this.mode === 'pomodoro') {
            if (this.pomodoroPhase === 'work') {
                // 工作阶段完成
                this.pomodoroCount++;
                document.getElementById('pomodoroCount').textContent = this.pomodoroCount;
                dataStore.addStudyTime(this.selectedPath, studiedMinutes);
                
                if (settings.settings.soundEnabled) {
                    this.playCompletionSound();
                }
                
                // 切换到休息阶段
                this.pomodoroPhase = 'break';
                this.initialMinutes = this.breakDuration / 60;
                this.totalSeconds = this.breakDuration;
                document.getElementById('pomodoroPhase').textContent = '休息阶段';
                showNotification('🍅 工作完成！开始5分钟休息', 'success');
                
                // 触发奇遇
                if (Math.random() < 0.7) {
                    setTimeout(() => this.triggerAdventure(studiedMinutes), 500);
                }
                
                // 自动开始休息倒计时
                this.updateDisplay();
                setTimeout(() => this.start(), 1000);
            } else {
                // 休息阶段完成
                this.pomodoroPhase = 'work';
                this.initialMinutes = this.workDuration / 60;
                this.totalSeconds = this.workDuration;
                document.getElementById('pomodoroPhase').textContent = '工作阶段';
                showNotification('☕ 休息结束！准备开始新的番茄钟', 'info');
                this.updateDisplay();
            }
        } else {
            // 普通模式
            dataStore.addStudyTime(this.selectedPath, studiedMinutes);
            
            if (settings.settings.soundEnabled) {
                this.playCompletionSound();
            }
            
            // 触发奇遇（有概率）
            if (Math.random() < 0.7) {
                setTimeout(() => this.triggerAdventure(studiedMinutes), 500);
            } else {
                showNotification(`🎉 修行完成！获得 ${(studiedMinutes / 120).toFixed(1)} 时辰修为`, 'success');
            }
            
            this.reset();
        }
    }
    
    triggerAdventure(minutes) {
        const adventure = adventures[Math.floor(Math.random() * adventures.length)];
        const bonusMultiplier = { wisdom: 1.2, treasure: 1.3, enlightenment: 1.25, practice: 1.15, meditation: 1.1, karma: 1.2 };
        const multiplier = bonusMultiplier[adventure.type] || 1.0;
        const baseExp = minutes / 120; // 1时辰 = 120分钟
        const bonusExp = baseExp * (multiplier - 1);
        
        const modal = document.getElementById('adventureModal');
        const iconEl = document.querySelector('.adventure-icon');
        const textEl = document.getElementById('adventureText');
        const expEl = document.getElementById('adventureExp');
        const bonusEl = document.getElementById('adventureBonus');
        
        if (iconEl) iconEl.textContent = adventure.icon;
        if (textEl) textEl.textContent = adventure.text;
        if (expEl) expEl.textContent = `+${baseExp.toFixed(1)}`;
        if (bonusEl) bonusEl.textContent = bonusExp > 0 ? `(+${bonusExp.toFixed(2)} 奇遇加成)` : '';
        
        if (modal) modal.classList.add('show');
        
        // 添加奇遇奖励
        if (bonusExp > 0) {
            dataStore.addStudyTime(this.selectedPath, bonusExp * 60);
        }
    }

    playCompletionSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const notes = [523.25, 659.25, 783.99];
            
            notes.forEach((freq, i) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = freq;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + i * 0.2);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.2 + 0.4);
                
                oscillator.start(audioContext.currentTime + i * 0.2);
                oscillator.stop(audioContext.currentTime + i * 0.2 + 0.4);
            });
        } catch (e) {}
    }

    updateDisplay() {
        const minutes = Math.floor(this.totalSeconds / 60);
        const seconds = this.totalSeconds % 60;
        const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        document.getElementById('timerDisplay').textContent = display;
        
        // 更新页面标题
        if (this.isRunning) {
            document.title = `${display} - 墨池剑冢`;
        } else {
            document.title = '墨池剑冢 - 诗剑行';
        }
    }
}

// ==================== 全局实例 ====================
const settings = new Settings();
const dataStore = new DataStore();
const timer = new StudyTimer();
const dailyPlan = new DailyPlan();
let realmSystem;

// ==================== 工具函数 ====================

function showNotification(message, type = 'success') {
    const colors = {
        success: 'linear-gradient(135deg, #2e7d32, #1b5e20)',
        error: 'linear-gradient(135deg, #c0392b, #a93226)',
        info: 'linear-gradient(135deg, #1a1a1a, #333)',
        warning: 'linear-gradient(135deg, #d35400, #e67e22)'
    };
    
    const tip = document.createElement('div');
    tip.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
        font-family: var(--font-serif);
        max-width: 350px;
    `;
    tip.textContent = message;
    document.body.appendChild(tip);
    
    setTimeout(() => {
        tip.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => tip.remove(), 300);
    }, 3000);
}

function showAchievementUnlock(achievement) {
    const overlay = document.createElement('div');
    overlay.className = 'achievement-unlock-overlay';
    overlay.innerHTML = `
        <div class="achievement-unlock-content">
            <div class="achievement-unlock-icon">${achievement.icon}</div>
            <h3>🏆 成就解锁</h3>
            <p class="achievement-unlock-name">${achievement.name}</p>
            <p class="achievement-unlock-desc">${achievement.desc}</p>
        </div>
    `;
    document.body.appendChild(overlay);
    
    if (settings.settings.soundEnabled) {
        playAchievementSound();
    }
    
    setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 500);
    }, 3000);
}

function playAchievementSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [392, 523.25, 659.25];
        
        notes.forEach((freq, i) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'triangle';
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + i * 0.12);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.12 + 0.3);
            
            oscillator.start(audioContext.currentTime + i * 0.12);
            oscillator.stop(audioContext.currentTime + i * 0.12 + 0.3);
        });
    } catch (e) {}
}

function displayRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = `"${quote}"`;
}

function getDailyWisdom() {
    const hour = new Date().getHours();
    let period = 'evening';
    if (hour >= 5 && hour < 12) period = 'morning';
    else if (hour >= 12 && hour < 18) period = 'afternoon';
    
    const wisdoms = dailyWisdom[period];
    return wisdoms[Math.floor(Math.random() * wisdoms.length)];
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    achievementsData.forEach(achievement => {
        const unlocked = dataStore.data.unlockedAchievements.includes(achievement.id);
        const div = document.createElement('div');
        div.className = `achievement-item ${unlocked ? 'unlocked' : 'locked'}`;
        
        // 添加进度显示
        let progress = '';
        if (!unlocked) {
            let current = 0, target = achievement.value;
            switch(achievement.requirement) {
                case 'checkin': current = dataStore.data.totalCheckinDays; break;
                case 'streak': current = dataStore.data.checkinStreak; break;
                case 'hours': current = dataStore.data.totalHours; break;
                case 'task': current = dataStore.data.totalTasksCompleted; break;
                case 'notes': 
                    const notes = JSON.parse(localStorage.getItem('studyNotes') || '[]');
                    current = notes.length;
                    break;
                default:
                    if (achievement.requirement.startsWith('path-')) {
                        const pathKey = achievement.requirement.replace('path-', '');
                        current = dataStore.data.learningPaths[pathKey] || 0;
                    }
            }
            const percent = Math.min(100, (current / target) * 100);
            progress = `<div class="achievement-progress"><div class="achievement-progress-fill" style="width:${percent}%"></div></div>`;
        }
        
        div.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.desc}</div>
            ${progress}
        `;
        grid.appendChild(div);
    });
}

function updateGoalProgress() {
    const goal = settings.settings.dailyGoal;
    const today = dataStore.data.todayStudied;
    const percentage = Math.min((today / goal) * 100, 100);
    
    const todayHoursEl = document.getElementById('todayHours');
    const goalTargetEl = document.getElementById('goalTarget');
    const progressCircle = document.getElementById('progressCircle');
    const goalStatusEl = document.getElementById('goalStatus');
    
    if (todayHoursEl) todayHoursEl.textContent = today.toFixed(1);
    if (goalTargetEl) goalTargetEl.textContent = goal;
    
    if (progressCircle) {
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (percentage / 100) * circumference;
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = offset;
    }
    
    if (goalStatusEl) {
        if (today === 0) {
            goalStatusEl.textContent = getDailyWisdom();
        } else if (today >= goal) {
            goalStatusEl.textContent = '🎉 目标已达成！继续加油！';
            goalStatusEl.style.color = 'var(--success-color)';
        } else if (today >= goal * 0.75) {
            goalStatusEl.textContent = '🔥 即将达成目标！';
            goalStatusEl.style.color = 'var(--warning-color)';
        } else if (today >= goal * 0.5) {
            goalStatusEl.textContent = '💪 已完成一半，继续修行！';
        } else {
            goalStatusEl.textContent = '🚀 刚刚起步，加油！';
        }
    }
}

function updateHeatmap() {
    const grid = document.getElementById('heatmapGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const today = new Date();
    const days = 91; // 13周
    
    // 添加星期标签
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const hours = dataStore.data.dailyHistory[dateStr] || 0;
        
        let level = 0;
        if (hours > 0) level = 1;
        if (hours >= 1) level = 2;
        if (hours >= 2) level = 3;
        if (hours >= 3) level = 4;
        
        const dayEl = document.createElement('div');
        dayEl.className = 'heatmap-day';
        dayEl.dataset.level = level;
        
        const dateFormatted = `${date.getMonth() + 1}月${date.getDate()}日`;
        dayEl.title = `${dateFormatted}\n修行: ${hours.toFixed(1)}时辰`;
        
        grid.appendChild(dayEl);
    }
}

function updateChart(period = 'week') {
    const container = document.getElementById('chartContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const today = new Date();
    const days = period === 'week' ? 7 : 30;
    const data = [];
    let totalHours = 0;
    
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const hours = dataStore.data.dailyHistory[dateStr] || 0;
        totalHours += hours;
        
        data.push({
            date: dateStr,
            hours: hours,
            label: period === 'week' ? 
                ['日', '一', '二', '三', '四', '五', '六'][date.getDay()] : 
                `${date.getDate()}`
        });
    }
    
    const maxHours = Math.max(...data.map(d => d.hours), 1);
    const avgHours = totalHours / days;
    
    data.forEach(item => {
        const barWrapper = document.createElement('div');
        barWrapper.className = 'chart-bar-wrapper';
        
        const valueLabel = document.createElement('div');
        valueLabel.className = 'chart-value';
        valueLabel.textContent = item.hours > 0 ? item.hours.toFixed(1) : '';
        
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        const height = (item.hours / maxHours) * 180;
        bar.style.height = Math.max(height, 5) + 'px';
        bar.title = `${item.date}: ${item.hours.toFixed(1)}时辰`;
        
        // 超过平均值用亮色
        if (item.hours > avgHours) {
            bar.classList.add('above-avg');
        }
        
        const label = document.createElement('div');
        label.className = 'chart-label';
        label.textContent = item.label;
        
        barWrapper.appendChild(valueLabel);
        barWrapper.appendChild(bar);
        barWrapper.appendChild(label);
        container.appendChild(barWrapper);
    });
    
    // 更新统计
    const statsEl = document.querySelector('.chart-stats');
    if (statsEl) {
        statsEl.innerHTML = `
            <span>总计: ${totalHours.toFixed(1)}时辰</span>
            <span>日均: ${avgHours.toFixed(1)}时辰</span>
        `;
    }
}

function renderDailyPlan() {
    const container = document.getElementById('tasksContainer');
    if (!container) return;
    
    const stats = dailyPlan.getStats();
    
    document.getElementById('completedTasks').textContent = stats.completed;
    document.getElementById('totalTasks').textContent = stats.total;
    document.getElementById('completionRate').textContent = stats.rate + '%';
    
    if (dailyPlan.tasks.length === 0) {
        container.innerHTML = `
            <div class="empty-tasks">
                <div class="empty-icon">📜</div>
                <p>今日暂无修行计划</p>
                <p class="empty-hint">请添加一项任务以始修行</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    const difficultyLabels = {
        'normal': { text: '丙', class: 'diff-normal' },
        'hard': { text: '乙', class: 'diff-hard' },
        'expert': { text: '甲', class: 'diff-expert' }
    };
    
    const priorityLabels = {
        'high': { text: '急', class: 'priority-high' },
        'medium': { text: '中', class: 'priority-medium' },
        'low': { text: '缓', class: 'priority-low' }
    };

    dailyPlan.tasks.forEach(task => {
        const taskEl = document.createElement('div');
        taskEl.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        const diff = difficultyLabels[task.difficulty || 'normal'];
        const priority = priorityLabels[task.priority || 'medium'];
        
        const tagsHTML = task.tags && task.tags.length > 0 
            ? `<div class="task-tags">${task.tags.map(tag => `<span class="task-tag">${escapeHtml(tag)}</span>`).join('')}</div>`
            : '';
        
        taskEl.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
            <span class="task-difficulty ${diff.class}" title="难度">${diff.text}</span>
            <span class="task-priority ${priority.class}" title="优先级">${priority.text}</span>
            <span class="task-text">${escapeHtml(task.text)}</span>
            ${tagsHTML}
            <button class="task-delete" data-id="${task.id}">✕</button>
        `;
        
        container.appendChild(taskEl);
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function toggleTasksPanel() {
    const panel = document.getElementById('tasksPanel');
    if (!panel) return;
    
    if (panel.style.display === 'none' || !panel.style.display) {
        panel.style.display = 'flex';
        setTimeout(() => panel.classList.add('open'), 10);
        renderDailyPlan();
    } else {
        panel.classList.remove('open');
        setTimeout(() => panel.style.display = 'none', 400);
    }
}

function closeTasksPanel() {
    const panel = document.getElementById('tasksPanel');
    if (panel) {
        panel.classList.remove('open');
        setTimeout(() => panel.style.display = 'none', 400);
    }
}

// ==================== 事件监听 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 隐藏加载动画，显示页面内容
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const container = document.querySelector('.container');
        
        if (loader) {
            loader.classList.add('hidden');
        }
        if (container) {
            container.classList.add('loaded');
        }
    }, 500);
    
    // 初始化境界系统
    realmSystem = new RealmSystem();
    realmSystem.updateRealm();
    
    // 初始化显示
    displayRandomQuote();
    dataStore.updateUI();
    updateHeatmap();
    updateChart('week');
    updateGoalProgress();
    renderDailyPlan();
    
    // 加载设置到UI
    const soundToggle = document.getElementById('soundToggle');
    const breakToggle = document.getElementById('breakToggle');
    const breakInterval = document.getElementById('breakInterval');
    const goalHours = document.getElementById('goalHours');
    
    if (soundToggle) soundToggle.checked = settings.settings.soundEnabled;
    if (breakToggle) breakToggle.checked = settings.settings.breakReminder;
    if (breakInterval) breakInterval.value = settings.settings.breakInterval;
    if (goalHours) goalHours.value = settings.settings.dailyGoal;
    
    // 名言按钮
    document.getElementById('newQuote')?.addEventListener('click', displayRandomQuote);
    
    // 计时器预设按钮
    document.querySelectorAll('.preset-btn-modern').forEach(btn => {
        btn.addEventListener('click', () => {
            const minutes = parseInt(btn.dataset.minutes);
            timer.setTime(minutes);
            
            document.querySelectorAll('.preset-btn-modern').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // 学习方向选择
    document.getElementById('pathSelect')?.addEventListener('change', (e) => {
        timer.selectedPath = e.target.value;
    });
    
    // 计时器控制按钮
    document.getElementById('startBtn')?.addEventListener('click', () => timer.start());
    document.getElementById('pauseBtn')?.addEventListener('click', () => timer.pause());
    document.getElementById('resetBtn')?.addEventListener('click', () => timer.reset());
    
    // 今日目标设置
    document.getElementById('setGoalBtn')?.addEventListener('click', () => {
        const goal = parseFloat(document.getElementById('goalHours').value);
        if (goal > 0 && goal <= 12) {
            settings.settings.dailyGoal = goal;
            settings.save();
            updateGoalProgress();
            showNotification(`今日目标已设为 ${goal} 时辰！`, 'success');
        } else {
            showNotification('请输入1-12之间的目标', 'warning');
        }
    });
    
    // 打卡按钮 - 增加动画效果
    document.getElementById('checkinBtn')?.addEventListener('click', function() {
        const result = dataStore.checkin();
        const btn = this;
        
        if (result.success) {
            btn.classList.add('checking');
            btn.textContent = '✓ 已点卯';
            btn.disabled = true;
            
            // 添加粒子效果
            createCheckinParticles(btn);
            
            showNotification(result.message, 'success');
            
            setTimeout(() => btn.classList.remove('checking'), 1000);
        } else {
            if (result.alreadyChecked) {
                btn.textContent = '✓ 已点卯';
                btn.disabled = true;
            }
            showNotification(result.message, 'warning');
        }
    });
    
    // 检查今天是否已打卡
    const today = new Date().toDateString();
    const lastCheckinDate = dataStore.data.lastCheckin ? new Date(dataStore.data.lastCheckin).toDateString() : null;
    if (lastCheckinDate === today) {
        const btn = document.getElementById('checkinBtn');
        if (btn) {
            btn.textContent = '✓ 已点卯';
            btn.disabled = true;
        }
    }
    
    // 图表切换
    document.querySelectorAll('.chart-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateChart(tab.dataset.period);
        });
    });
    
    // 数据导出导入
    document.getElementById('exportBtn')?.addEventListener('click', () => {
        dataStore.exportData();
        showNotification('📦 经书已誊写完毕！', 'success');
    });
    
    document.getElementById('importBtn')?.addEventListener('click', () => {
        document.getElementById('importFile').click();
    });
    
    document.getElementById('importFile')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (dataStore.importData(event.target.result)) {
                    showNotification('📖 残卷研读成功！', 'success');
                    setTimeout(() => location.reload(), 1000);
                } else {
                    showNotification('❌ 残卷损坏，无法研读！', 'error');
                }
            };
            reader.readAsText(file);
        }
    });
    
    document.getElementById('clearBtn')?.addEventListener('click', () => {
        dataStore.clearAllData();
    });
    
    // 设置开关
    document.getElementById('soundToggle')?.addEventListener('change', (e) => {
        settings.settings.soundEnabled = e.target.checked;
        settings.save();
        showNotification(e.target.checked ? '🔔 提示音已开启' : '🔕 提示音已关闭', 'info');
    });
    
    document.getElementById('breakToggle')?.addEventListener('change', (e) => {
        settings.settings.breakReminder = e.target.checked;
        settings.save();
        showNotification(e.target.checked ? '⏰ 休息提醒已开启' : '⏰ 休息提醒已关闭', 'info');
    });
    
    document.getElementById('breakInterval')?.addEventListener('change', (e) => {
        settings.settings.breakInterval = parseInt(e.target.value);
        settings.save();
    });
    
    // 任务面板控制
    document.getElementById('viewTasksBtn')?.addEventListener('click', toggleTasksPanel);
    document.getElementById('closeTasksBtn')?.addEventListener('click', closeTasksPanel);
    
    // 快速添加任务（回车键）
    document.getElementById('taskInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskFromInput();
        }
    });
    
    // 添加任务按钮
    document.getElementById('addTaskBtn')?.addEventListener('click', addTaskFromInput);
    
    // 任务复选框和删除按钮（事件委托）
    document.getElementById('tasksContainer')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-checkbox')) {
            const taskId = parseInt(e.target.dataset.id);
            dailyPlan.toggleTask(taskId);
            renderDailyPlan();
            
            const task = dailyPlan.tasks.find(t => t.id === taskId);
            if (task && task.completed) {
                showNotification('✅ 任务已完成！', 'success');
            }
        }
        
        if (e.target.classList.contains('task-delete')) {
            const taskId = parseInt(e.target.dataset.id);
            dailyPlan.deleteTask(taskId);
            renderDailyPlan();
        }
    });
    
    // 清除已完成任务
    document.getElementById('clearCompletedBtn')?.addEventListener('click', () => {
        const stats = dailyPlan.getStats();
        if (stats.completed === 0) {
            showNotification('没有已完成的任务', 'info');
            return;
        }
        dailyPlan.clearCompleted();
        renderDailyPlan();
        showNotification('🧹 已清除已完成任务', 'info');
    });
    
    // 清空所有任务
    document.getElementById('clearAllTasksBtn')?.addEventListener('click', () => {
        if (dailyPlan.clearAll()) {
            renderDailyPlan();
        }
    });
    
    // 奇遇弹窗关闭
    document.getElementById('closeAdventureBtn')?.addEventListener('click', () => {
        const modal = document.getElementById('adventureModal');
        if (modal) modal.classList.remove('show');
    });
    
    document.getElementById('adventureModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'adventureModal') {
            e.target.classList.remove('show');
        }
    });
});

function addTaskFromInput() {
    const input = document.getElementById('taskInput');
    const difficultySelect = document.getElementById('taskDifficulty');
    const prioritySelect = document.getElementById('taskPriority');
    const tagsInput = document.getElementById('taskTags');
    
    const text = input?.value.trim();
    const difficulty = difficultySelect?.value || 'normal';
    const priority = prioritySelect?.value || 'medium';
    const tagsText = tagsInput?.value.trim() || '';
    const tags = tagsText ? tagsText.split(',').map(t => t.trim()).filter(t => t) : [];
    
    if (text) {
        if (dailyPlan.addTask(text, difficulty, priority, tags)) {
            input.value = '';
            if (tagsInput) tagsInput.value = '';
            renderDailyPlan();
            showNotification('📋 任务已添加', 'success');
            
            const panel = document.getElementById('tasksPanel');
            if (panel && panel.style.display === 'none') {
                toggleTasksPanel();
            }
        }
    } else {
        showNotification('请输入任务内容', 'warning');
    }
}

function createCheckinParticles(btn) {
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'checkin-particle';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

// CSS动画（通过JS注入）
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    /* 境界突破动画 */
    .breakthrough-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.5s ease;
    }
    
    .breakthrough-overlay.fade-out {
        animation: fadeOut 0.5s ease forwards;
    }
    
    @keyframes fadeOut {
        to { opacity: 0; }
    }
    
    .breakthrough-content {
        text-align: center;
        color: white;
        animation: zoomIn 0.5s ease;
    }
    
    @keyframes zoomIn {
        from { transform: scale(0.5); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    
    .breakthrough-flash {
        position: absolute;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%);
        animation: pulse 1.5s ease-in-out infinite;
    }
    
    .breakthrough-icon {
        font-size: 6rem;
        margin-bottom: 20px;
        animation: float 2s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
    
    .breakthrough-title {
        font-size: 2.5rem;
        color: #ffd700;
        margin-bottom: 10px;
        text-shadow: 0 0 20px rgba(255,215,0,0.5);
    }
    
    .breakthrough-realm {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 10px;
        background: linear-gradient(135deg, #ffd700, #ff6b6b);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    
    .breakthrough-subtitle {
        font-size: 1.2rem;
        color: rgba(255,255,255,0.7);
        margin-bottom: 30px;
    }
    
    .btn-breakthrough-close {
        padding: 12px 40px;
        background: linear-gradient(135deg, #c0392b, #e74c3c);
        border: none;
        border-radius: 25px;
        color: white;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .btn-breakthrough-close:hover {
        transform: scale(1.1);
        box-shadow: 0 0 30px rgba(192, 57, 43, 0.5);
    }
    
    /* 成就解锁动画 */
    .achievement-unlock-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9998;
        animation: fadeIn 0.3s ease;
    }
    
    .achievement-unlock-overlay.fade-out {
        animation: fadeOut 0.5s ease forwards;
    }
    
    .achievement-unlock-content {
        background: linear-gradient(135deg, #1a1a1a, #333);
        padding: 40px 60px;
        border-radius: 20px;
        text-align: center;
        border: 3px solid #ffd700;
        box-shadow: 0 0 50px rgba(255, 215, 0, 0.3);
        animation: bounceIn 0.5s ease;
    }
    
    @keyframes bounceIn {
        0% { transform: scale(0); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .achievement-unlock-icon {
        font-size: 5rem;
        margin-bottom: 15px;
        animation: tada 1s ease;
    }
    
    @keyframes tada {
        0% { transform: scale(1); }
        10%, 20% { transform: scale(0.9) rotate(-3deg); }
        30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
        40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
        100% { transform: scale(1) rotate(0); }
    }
    
    .achievement-unlock-content h3 {
        color: #ffd700;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    
    .achievement-unlock-name {
        font-size: 1.8rem;
        color: white;
        font-weight: bold;
        margin-bottom: 10px;
    }
    
    .achievement-unlock-desc {
        color: rgba(255,255,255,0.7);
        font-size: 1rem;
    }
    
    /* 成就进度条 */
    .achievement-progress {
        width: 100%;
        height: 4px;
        background: rgba(255,255,255,0.2);
        border-radius: 2px;
        margin-top: 8px;
        overflow: hidden;
    }
    
    .achievement-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #6366f1, #a855f7);
        border-radius: 2px;
        transition: width 0.5s ease;
    }
    
    /* 打卡粒子效果 */
    .checkin-particle {
        position: fixed;
        width: 10px;
        height: 10px;
        background: #ffd700;
        border-radius: 50%;
        pointer-events: none;
        animation: particleExplode 1s ease-out forwards;
    }
    
    @keyframes particleExplode {
        0% { 
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% { 
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
        }
    }
    
    .btn-checkin.checking {
        animation: pulse 0.5s ease;
    }
    
    /* 图表增强 */
    .chart-bar-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .chart-value {
        font-size: 0.75rem;
        color: var(--text-secondary);
        margin-bottom: 5px;
        min-height: 1em;
    }
    
    .chart-bar.above-avg {
        background: linear-gradient(to top, #10b981, #34d399);
    }
    
    .chart-stats {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-top: 15px;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    /* 任务优先级 */
    .task-priority {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: bold;
        flex-shrink: 0;
    }
    
    .priority-high {
        background: #fee2e2;
        color: #991b1b;
        border: 1px solid #ef4444;
    }
    
    .priority-medium {
        background: #fef3c7;
        color: #92400e;
        border: 1px solid #f59e0b;
    }
    
    .priority-low {
        background: #d1fae5;
        color: #065f46;
        border: 1px solid #10b981;
    }
`;
document.head.appendChild(styleSheet);

// ==================== 学习笔记系统 ====================
class NotesManager {
    constructor() {
        this.notes = this.loadNotes();
    }
    
    loadNotes() {
        const saved = localStorage.getItem('studyNotes');
        return saved ? JSON.parse(saved) : [];
    }
    
    save() {
        localStorage.setItem('studyNotes', JSON.stringify(this.notes));
    }
    
    addNote(content) {
        if (!content.trim()) return false;
        
        this.notes.unshift({
            id: Date.now(),
            content: content.trim(),
            createdAt: new Date().toISOString()
        });
        
        this.save();
        dataStore.checkAchievements();
        return true;
    }
    
    deleteNote(id) {
        this.notes = this.notes.filter(n => n.id !== id);
        this.save();
    }
    
    searchNotes(keyword) {
        if (!keyword) return this.notes;
        return this.notes.filter(n => 
            n.content.toLowerCase().includes(keyword.toLowerCase())
        );
    }
    
    render(keyword = '') {
        const container = document.getElementById('notesList');
        if (!container) return;
        
        const notes = keyword ? this.searchNotes(keyword) : this.notes;
        
        if (notes.length === 0) {
            container.innerHTML = `
                <div class="empty-notes">
                    <p>📖 ${keyword ? '未找到相关札记' : '尚无札记'}</p>
                    <p style="font-size:0.9rem;">${keyword ? '换个关键词试试' : '记录修行心得，留下智慧结晶'}</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = notes.slice(0, 20).map(note => {
            const date = new Date(note.createdAt).toLocaleDateString('zh-CN', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            return `
                <div class="note-item">
                    <div class="note-content">${escapeHtml(note.content)}</div>
                    <div class="note-meta">
                        <span>${date}</span>
                        <button class="note-delete" data-id="${note.id}">删除</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

const notesManager = new NotesManager();

// ==================== 专注模式 ====================
class FocusMode {
    constructor() {
        this.active = false;
    }
    
    toggle() {
        if (this.active) {
            this.exit();
        } else {
            this.enter();
        }
    }
    
    enter() {
        if (!timer.selectedPath) {
            showNotification('请先选择修行心法！', 'warning');
            return;
        }
        
        this.active = true;
        const focusMode = document.getElementById('focusMode');
        if (focusMode) {
            focusMode.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            this.updateDisplay();
            
            const focusQuote = document.getElementById('focusQuote');
            if (focusQuote) {
                focusQuote.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
            }
        }
    }
    
    exit() {
        this.active = false;
        const focusMode = document.getElementById('focusMode');
        if (focusMode) {
            focusMode.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    updateDisplay() {
        const focusTimer = document.getElementById('focusTimer');
        const focusPath = document.getElementById('focusPath');
        
        if (focusTimer) {
            focusTimer.textContent = document.getElementById('timerDisplay').textContent;
        }
        
        if (focusPath) {
            const pathNames = {
                'cs-basics': '内功心法',
                'llm': '万剑归宗',
                'rl': '独孤九剑'
            };
            focusPath.textContent = pathNames[timer.selectedPath] || '修行中...';
        }
    }
}

const focusMode = new FocusMode();

// ==================== 快捷键支持 ====================
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        return;
    }
    
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            if (timer.isRunning) {
                timer.pause();
            } else {
                timer.start();
            }
            break;
            
        case 'KeyR':
            if (!e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                timer.reset();
            }
            break;
            
        case 'KeyF':
            e.preventDefault();
            focusMode.toggle();
            break;
            
        case 'Escape':
            if (focusMode.active) {
                focusMode.exit();
            }
            closeTasksPanel();
            break;
            
        case 'KeyQ':
            e.preventDefault();
            displayRandomQuote();
            break;
    }
});

// ==================== 页面加载动画 ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 500);
        }
    }, 1000);
});

// ==================== 计时器呼吸灯效果 ====================
const originalStart = timer.start.bind(timer);
timer.start = function() {
    originalStart();
    const display = document.querySelector('.timer-display-modern');
    if (display) display.classList.add('running');
};

const originalPause = timer.pause.bind(timer);
timer.pause = function() {
    originalPause();
    const display = document.querySelector('.timer-display-modern');
    if (display) display.classList.remove('running');
};

const originalReset = timer.reset.bind(timer);
timer.reset = function() {
    originalReset();
    const display = document.querySelector('.timer-display-modern');
    if (display) display.classList.remove('running');
};

const originalUpdateDisplay = timer.updateDisplay.bind(timer);
timer.updateDisplay = function() {
    originalUpdateDisplay();
    if (focusMode.active) {
        focusMode.updateDisplay();
    }
};

// ==================== 初始化新功能 ====================
document.addEventListener('DOMContentLoaded', () => {
    notesManager.render();
    
    // 笔记保存按钮
    document.getElementById('saveNoteBtn')?.addEventListener('click', () => {
        const input = document.getElementById('noteInput');
        if (input && input.value.trim()) {
            if (notesManager.addNote(input.value)) {
                input.value = '';
                notesManager.render();
                showNotification('📝 札记已记录', 'success');
            }
        } else {
            showNotification('请输入内容', 'warning');
        }
    });
    
    // 笔记搜索
    document.getElementById('noteSearch')?.addEventListener('input', (e) => {
        notesManager.render(e.target.value);
    });
    
    // 笔记删除（事件委托）
    document.getElementById('notesList')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('note-delete')) {
            const id = parseInt(e.target.dataset.id);
            notesManager.deleteNote(id);
            notesManager.render();
            showNotification('🗑️ 札记已删除', 'info');
        }
    });
    
    // 专注模式控制
    document.getElementById('focusStartBtn')?.addEventListener('click', () => timer.start());
    document.getElementById('focusPauseBtn')?.addEventListener('click', () => timer.pause());
    document.getElementById('focusResetBtn')?.addEventListener('click', () => timer.reset());
    document.getElementById('exitFocusBtn')?.addEventListener('click', () => focusMode.exit());
    
    // 同步专注模式的开始/暂停按钮状态
    const syncFocusButtons = () => {
        const focusStartBtn = document.getElementById('focusStartBtn');
        const focusPauseBtn = document.getElementById('focusPauseBtn');
        
        if (timer.isRunning) {
            if (focusStartBtn) focusStartBtn.style.display = 'none';
            if (focusPauseBtn) focusPauseBtn.style.display = 'inline-block';
        } else {
            if (focusStartBtn) focusStartBtn.style.display = 'inline-block';
            if (focusPauseBtn) focusPauseBtn.style.display = 'none';
        }
    };
    
    setInterval(syncFocusButtons, 100);
});

// ==================== 欢迎提示 ====================
setTimeout(() => {
    const hour = new Date().getHours();
    let greeting = '夜深了，注意休息！';
    if (hour >= 5 && hour < 12) greeting = '早安，今日也要努力修行！';
    else if (hour >= 12 && hour < 14) greeting = '午安，休息片刻再战！';
    else if (hour >= 14 && hour < 18) greeting = '下午好，继续加油！';
    else if (hour >= 18 && hour < 22) greeting = '晚上好，今日收获如何？';
    
    showNotification(`🗡️ ${greeting}`, 'info');
}, 2000);

// ==================== 数据统计系统 ====================
function showStatsModal() {
    const modal = document.getElementById('statsModal');
    if (!modal) return;
    
    // 更新统计数据
    document.getElementById('statTotalTime').textContent = dataStore.data.totalHours.toFixed(1) + '时辰';
    document.getElementById('statMaxStreak').textContent = dataStore.data.maxStreak + '天';
    document.getElementById('statTotalDays').textContent = dataStore.data.totalCheckinDays + '天';
    document.getElementById('statTotalTasks').textContent = dataStore.data.totalTasksCompleted;
    document.getElementById('statAchievements').textContent = dataStore.data.unlockedAchievements.length + '/' + achievementsData.length;
    
    // 课程统计
    const courses = JSON.parse(localStorage.getItem('studyCourses') || '[]');
    document.getElementById('statCourses').textContent = courses.length;
    
    // 各方向时长
    document.getElementById('pathCS').textContent = dataStore.data.learningPaths['cs-basics'].toFixed(1) + ' 时辰';
    document.getElementById('pathLLM').textContent = dataStore.data.learningPaths['llm'].toFixed(1) + ' 时辰';
    document.getElementById('pathRL').textContent = dataStore.data.learningPaths['rl'].toFixed(1) + ' 时辰';
    
    modal.classList.add('show');
}

function generateWeeklyReport() {
    const modal = document.getElementById('reportModal');
    const content = document.getElementById('reportContent');
    if (!modal || !content) return;
    
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - 6);
    
    // 计算本周数据
    let weekHours = 0;
    let weekDays = 0;
    const dailyData = [];
    
    for (let i = 0; i < 7; i++) {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];
        const hours = dataStore.data.dailyHistory[dateStr] || 0;
        weekHours += hours;
        if (hours > 0) weekDays++;
        dailyData.push({ date: dateStr, hours, day: ['日', '一', '二', '三', '四', '五', '六'][date.getDay()] });
    }
    
    const avgHours = weekDays > 0 ? (weekHours / weekDays).toFixed(1) : 0;
    const bestDay = dailyData.reduce((max, day) => day.hours > max.hours ? day : max, dailyData[0]);
    
    // 生成报告HTML
    content.innerHTML = `
        <div class="report-section">
            <h3>📊 本周概况</h3>
            <div class="report-summary">
                <div class="report-item">
                    <div class="report-value">${weekHours.toFixed(1)}</div>
                    <div class="report-label">总修行时长（时辰）</div>
                </div>
                <div class="report-item">
                    <div class="report-value">${weekDays}</div>
                    <div class="report-label">修行天数</div>
                </div>
                <div class="report-item">
                    <div class="report-value">${avgHours}</div>
                    <div class="report-label">日均时长（时辰）</div>
                </div>
            </div>
        </div>
        
        <div class="report-section">
            <h3>📅 每日明细</h3>
            <div class="report-chart">
                ${dailyData.map(day => `
                    <div class="report-day-item" style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--surface-light);">
                        <span>${day.day} (${day.date.slice(5)})</span>
                        <div style="display:flex;align-items:center;gap:10px;">
                            <div style="width:200px;height:8px;background:var(--surface-light);border-radius:4px;overflow:hidden;">
                                <div style="width:${Math.min((day.hours / Math.max(bestDay.hours, 1)) * 100, 100)}%;height:100%;background:var(--cinnabar);"></div>
                            </div>
                            <span style="min-width:60px;text-align:right;color:var(--cinnabar);font-weight:bold;">${day.hours.toFixed(1)}h</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="report-section">
            <h3>🏆 本周成就</h3>
            <div class="report-summary">
                <div class="report-item">
                    <div class="report-value">${bestDay.day}</div>
                    <div class="report-label">最勤奋的一天</div>
                </div>
                <div class="report-item">
                    <div class="report-value">${dataStore.data.checkinStreak}</div>
                    <div class="report-label">当前连胜</div>
                </div>
                <div class="report-item">
                    <div class="report-value">${dataStore.data.totalTasksCompleted}</div>
                    <div class="report-label">累计完成任务</div>
                </div>
            </div>
        </div>
        
        <div class="report-section">
            <p style="text-align:center;color:var(--text-secondary);padding:20px;background:var(--paper-bg);border-radius:10px;margin-top:20px;">
                ${weekHours > 10 ? '🎉 本周修行勤奋，继续保持！' : weekHours > 5 ? '💪 本周表现不错，再接再厉！' : '⚡ 继续努力，每天进步一点点！'}
            </p>
        </div>
    `;
    
    modal.classList.add('show');
}

// ==================== 首次使用引导 ====================
function checkFirstVisit() {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
        setTimeout(() => {
            const guide = document.getElementById('welcomeGuide');
            if (guide) guide.classList.add('show');
        }, 1000);
    }
}

// 初始化时检查首次访问
checkFirstVisit();

// ==================== 番茄钟模式切换 ====================
function switchTimerMode(mode) {
    timer.mode = mode;
    timer.reset();
    
    const pomodoroInfo = document.getElementById('pomodoroInfo');
    if (mode === 'pomodoro') {
        timer.setTime(25); // 固定25分钟
        timer.pomodoroPhase = 'work';
        timer.pomodoroCount = 0;
        if (pomodoroInfo) {
            pomodoroInfo.style.display = 'flex';
            document.getElementById('pomodoroCount').textContent = '0';
            document.getElementById('pomodoroPhase').textContent = '工作阶段';
        }
        showNotification('🍅 番茄钟模式开启！25分钟专注 + 5分钟休息', 'info');
    } else {
        if (pomodoroInfo) pomodoroInfo.style.display = 'none';
        showNotification('🎯 切换到普通模式', 'info');
    }
}

// ==================== 徽章墙展示 ====================
function showBadgesModal() {
    const modal = document.getElementById('badgesModal');
    const grid = document.getElementById('badgesGrid');
    if (!modal || !grid) return;
    
    const unlockedBadges = dataStore.data.unlockedAchievements;
    const totalBadges = achievementsData.length;
    const progress = (unlockedBadges.length / totalBadges * 100).toFixed(0);
    
    // 更新进度
    document.getElementById('badgesUnlocked').textContent = unlockedBadges.length;
    document.getElementById('badgesTotal').textContent = totalBadges;
    document.getElementById('badgesProgressFill').style.width = progress + '%';
    
    // 生成徽章卡片
    grid.innerHTML = achievementsData.map(achievement => {
        const unlocked = unlockedBadges.includes(achievement.id);
        const unlockedData = dataStore.data.achievementUnlockTimes?.[achievement.id];
        const unlockedTime = unlockedData ? new Date(unlockedData).toLocaleDateString('zh-CN') : '';
        
        return `
            <div class="badge-card ${unlocked ? 'unlocked' : 'locked'}">
                <div class="badge-icon">${achievement.icon}</div>
                <div class="badge-name">${achievement.name}</div>
                <div class="badge-desc">${achievement.description}</div>
                ${unlocked && unlockedTime ? `<div class="badge-unlocked-time">解锁于 ${unlockedTime}</div>` : ''}
            </div>
        `;
    }).join('');
    
    modal.classList.add('show');
}

// ==================== 数据对比 ====================
function showCompareModal() {
    const modal = document.getElementById('compareModal');
    const content = document.getElementById('compareContent');
    if (!modal || !content) return;
    
    const today = new Date();
    const history = dataStore.data.dailyHistory || {};
    
    // 计算本周数据
    let thisWeekHours = 0;
    let thisWeekDays = 0;
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const hours = history[dateStr] || 0;
        thisWeekHours += hours;
        if (hours > 0) thisWeekDays++;
    }
    
    // 计算上周数据
    let lastWeekHours = 0;
    let lastWeekDays = 0;
    for (let i = 7; i < 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const hours = history[dateStr] || 0;
        lastWeekHours += hours;
        if (hours > 0) lastWeekDays++;
    }
    
    // 计算变化
    const hoursChange = thisWeekHours - lastWeekHours;
    const daysChange = thisWeekDays - lastWeekDays;
    const hoursChangePercent = lastWeekHours > 0 ? ((hoursChange / lastWeekHours) * 100).toFixed(1) : '0';
    
    const hoursChangeClass = hoursChange > 0 ? 'positive' : hoursChange < 0 ? 'negative' : 'neutral';
    const daysChangeClass = daysChange > 0 ? 'positive' : daysChange < 0 ? 'negative' : 'neutral';
    
    content.innerHTML = `
        <div class="compare-section">
            <h3>📊 学习时长对比</h3>
            <div class="compare-cards">
                <div class="compare-card">
                    <div class="compare-period">上周</div>
                    <div class="compare-value">${lastWeekHours.toFixed(1)}</div>
                    <div class="compare-label">时辰</div>
                </div>
                <div class="compare-card current">
                    <div class="compare-period">本周</div>
                    <div class="compare-value">${thisWeekHours.toFixed(1)}</div>
                    <div class="compare-label">时辰</div>
                </div>
            </div>
            <div class="compare-change ${hoursChangeClass}">
                ${hoursChange > 0 ? '📈' : hoursChange < 0 ? '📉' : '➡️'}
                ${hoursChange > 0 ? '+' : ''}${hoursChange.toFixed(1)} 时辰
                (${hoursChangePercent > 0 ? '+' : ''}${hoursChangePercent}%)
            </div>
        </div>
        
        <div class="compare-section">
            <h3>📅 学习天数对比</h3>
            <div class="compare-cards">
                <div class="compare-card">
                    <div class="compare-period">上周</div>
                    <div class="compare-value">${lastWeekDays}</div>
                    <div class="compare-label">天</div>
                </div>
                <div class="compare-card current">
                    <div class="compare-period">本周</div>
                    <div class="compare-value">${thisWeekDays}</div>
                    <div class="compare-label">天</div>
                </div>
            </div>
            <div class="compare-change ${daysChangeClass}">
                ${daysChange > 0 ? '📈' : daysChange < 0 ? '📉' : '➡️'}
                ${daysChange > 0 ? '+' : ''}${daysChange} 天
            </div>
        </div>
        
        <div class="compare-section">
            <h3>💬 数据分析</h3>
            <p style="padding:20px;background:var(--paper-bg);border-radius:10px;text-align:center;color:var(--text-secondary);">
                ${hoursChange > 0 
                    ? `🎉 本周比上周多学习了 ${hoursChange.toFixed(1)} 时辰，进步明显！继续保持！` 
                    : hoursChange < 0 
                    ? `⚠️ 本周比上周少学习了 ${Math.abs(hoursChange).toFixed(1)} 时辰，需要加把劲哦！` 
                    : '➡️ 本周与上周学习时长相当，保持稳定。'}
            </p>
        </div>
    `;
    
    modal.classList.add('show');
}

// ==================== 学习提醒通知 ====================
class StudyReminder {
    constructor() {
        this.enabled = localStorage.getItem('notificationEnabled') === 'true';
        this.time = localStorage.getItem('notificationTime') || '20:00';
        this.checkInterval = null;
    }
    
    async requestPermission() {
        if ('Notification' in window) {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showNotification('✅ 已开启学习提醒通知', 'success');
                this.enabled = true;
                localStorage.setItem('notificationEnabled', 'true');
                this.startChecking();
                return true;
            } else {
                showNotification('❌ 通知权限被拒绝', 'error');
                return false;
            }
        } else {
            showNotification('❌ 浏览器不支持通知功能', 'error');
            return false;
        }
    }
    
    startChecking() {
        if (!this.enabled) return;
        
        // 每分钟检查一次
        this.checkInterval = setInterval(() => {
            const now = new Date();
            const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
            
            if (currentTime === this.time) {
                this.sendNotification();
            }
        }, 60000);
        
        // 立即检查一次
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        if (currentTime === this.time) {
            this.sendNotification();
        }
    }
    
    stopChecking() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
        }
    }
    
    sendNotification() {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('🗡️ 墨池剑冢提醒你', {
                body: '该修行了！仗剑走天涯，诗酒趁年华',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75">🗡️</text></svg>',
                badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75">🗡️</text></svg>'
            });
        }
    }
    
    setTime(time) {
        this.time = time;
        localStorage.setItem('notificationTime', time);
        this.stopChecking();
        if (this.enabled) {
            this.startChecking();
        }
    }
    
    toggle(enabled) {
        this.enabled = enabled;
        localStorage.setItem('notificationEnabled', enabled);
        
        if (enabled) {
            this.requestPermission();
        } else {
            this.stopChecking();
        }
    }
}

const studyReminder = new StudyReminder();

// ==================== 课程学习跟踪系统 ====================
class CourseTracker {
    constructor() {
        this.courses = this.loadCourses();
    }
    
    loadCourses() {
        const saved = localStorage.getItem('studyCourses');
        return saved ? JSON.parse(saved) : [];
    }
    
    save() {
        localStorage.setItem('studyCourses', JSON.stringify(this.courses));
    }
    
    addCourse(name, noteUrl = '') {
        if (!name.trim()) return false;
        
        this.courses.push({
            id: Date.now(),
            name: name.trim(),
            noteUrl: noteUrl.trim(),
            lectures: [],
            createdAt: new Date().toISOString(),
            expanded: true
        });
        
        this.save();
        return true;
    }
    
    deleteCourse(courseId) {
        if (!confirm('确定要删除这门课程吗？所有章节记录都将丢失！')) return false;
        this.courses = this.courses.filter(c => c.id !== courseId);
        this.save();
        return true;
    }
    
    addLecture(courseId, name, noteUrl = '') {
        if (!name.trim()) return false;
        
        const course = this.courses.find(c => c.id === courseId);
        if (!course) return false;
        
        course.lectures.push({
            id: Date.now(),
            name: name.trim(),
            noteUrl: noteUrl.trim(),
            completed: false,
            completedAt: null
        });
        
        this.save();
        return true;
    }
    
    deleteLecture(courseId, lectureId) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course) return false;
        
        course.lectures = course.lectures.filter(l => l.id !== lectureId);
        this.save();
        return true;
    }
    
    toggleLecture(courseId, lectureId) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course) return false;
        
        const lecture = course.lectures.find(l => l.id === lectureId);
        if (!lecture) return false;
        
        lecture.completed = !lecture.completed;
        lecture.completedAt = lecture.completed ? new Date().toISOString() : null;
        
        this.save();
        
        // 检查是否完成整门课程
        if (lecture.completed) {
            const allCompleted = course.lectures.every(l => l.completed);
            if (allCompleted && course.lectures.length > 0) {
                showNotification(`🎉 恭喜！《${course.name}》修行圆满！`, 'success');
            }
        }
        
        return lecture.completed;
    }
    
    toggleExpand(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (course) {
            course.expanded = !course.expanded;
            this.save();
        }
    }
    
    getCourseProgress(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course || course.lectures.length === 0) return 0;
        
        const completed = course.lectures.filter(l => l.completed).length;
        return Math.round((completed / course.lectures.length) * 100);
    }
    
    // 编辑课程笔记链接
    editCourseNote(courseId, newUrl) {
        const course = this.courses.find(c => c.id === courseId);
        if (course) {
            course.noteUrl = newUrl.trim();
            this.save();
            return true;
        }
        return false;
    }
    
    // 编辑章节笔记链接
    editLectureNote(courseId, lectureId, newUrl) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course) return false;
        
        const lecture = course.lectures.find(l => l.id === lectureId);
        if (lecture) {
            lecture.noteUrl = newUrl.trim();
            this.save();
            return true;
        }
        return false;
    }
    
    render() {
        const container = document.getElementById('coursesList');
        if (!container) return;
        
        if (this.courses.length === 0) {
            container.innerHTML = `
                <div class="empty-courses">
                    <div class="empty-courses-icon">📚</div>
                    <p>尚无修行课程</p>
                    <p style="font-size:0.9rem;">添加一门课程，开始系统修行</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = this.courses.map(course => {
            const progress = this.getCourseProgress(course.id);
            const completedCount = course.lectures.filter(l => l.completed).length;
            const isComplete = progress === 100 && course.lectures.length > 0;
            
            return `
                <div class="course-card" data-course-id="${course.id}">
                    <div class="course-header" onclick="courseTracker.toggleExpand(${course.id}); courseTracker.render();">
                        <div class="course-title">
                            <span>${isComplete ? '✅' : '📖'}</span>
                            <h3>${this.escapeHtml(course.name)}</h3>
                            <span class="course-progress-badge">${completedCount}/${course.lectures.length} (${progress}%)</span>
                        </div>
                        <div class="course-actions" onclick="event.stopPropagation();">
                            ${course.noteUrl ? 
                                `<a href="${this.escapeHtml(course.noteUrl)}" target="_blank" class="course-note-link" title="查看笔记">📝</a>` : 
                                `<button class="course-note-link" onclick="promptCourseNote(${course.id})" title="添加笔记链接" style="background:none;border:none;cursor:pointer;">➕📝</button>`
                            }
                            <button class="course-delete" onclick="courseTracker.deleteCourse(${course.id}); courseTracker.render();" title="删除课程">✕</button>
                        </div>
                    </div>
                    <div class="course-content ${course.expanded ? 'open' : ''}">
                        <div class="add-lecture-form">
                            <input type="text" class="lecture-input lecture-name-input" placeholder="章节名称（如：Lecture 1: Introduction）" data-course-id="${course.id}">
                            <input type="url" class="lecture-input lecture-note-input" placeholder="笔记链接（可选）" data-course-id="${course.id}">
                            <button class="btn-add-lecture" onclick="addLectureFromInput(${course.id})">➕ 添加</button>
                        </div>
                        <div class="lectures-list">
                            ${course.lectures.length > 0 ? course.lectures.map(lecture => `
                                <div class="lecture-item ${lecture.completed ? 'completed' : ''}">
                                    <input type="checkbox" class="lecture-checkbox" 
                                        ${lecture.completed ? 'checked' : ''} 
                                        onchange="courseTracker.toggleLecture(${course.id}, ${lecture.id}); courseTracker.render();">
                                    <div class="lecture-info">
                                        <span class="lecture-name">${this.escapeHtml(lecture.name)}</span>
                                    </div>
                                    ${lecture.noteUrl ? 
                                        `<a href="${this.escapeHtml(lecture.noteUrl)}" target="_blank" class="lecture-note-link">📝 笔记</a>` : 
                                        `<button class="lecture-note-link" onclick="promptLectureNote(${course.id}, ${lecture.id})" style="background:none;border:none;cursor:pointer;color:var(--text-secondary);">➕ 笔记</button>`
                                    }
                                    <button class="lecture-delete" onclick="courseTracker.deleteLecture(${course.id}, ${lecture.id}); courseTracker.render();">✕</button>
                                </div>
                            `).join('') : '<p style="text-align:center;color:var(--text-secondary);padding:20px;">暂无章节，添加第一个章节开始修行</p>'}
                        </div>
                        ${course.lectures.length > 0 ? `
                            <div class="course-progress-bar">
                                <div class="course-progress-fill" style="width: ${progress}%"></div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');
        
        // 绑定回车键添加章节
        document.querySelectorAll('.lecture-name-input').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const courseId = parseInt(input.dataset.courseId);
                    addLectureFromInput(courseId);
                }
            });
        });
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // 获取统计信息
    getStats() {
        const totalCourses = this.courses.length;
        const completedCourses = this.courses.filter(c => 
            c.lectures.length > 0 && c.lectures.every(l => l.completed)
        ).length;
        const totalLectures = this.courses.reduce((sum, c) => sum + c.lectures.length, 0);
        const completedLectures = this.courses.reduce((sum, c) => 
            sum + c.lectures.filter(l => l.completed).length, 0
        );
        
        return { totalCourses, completedCourses, totalLectures, completedLectures };
    }
}

const courseTracker = new CourseTracker();

// 添加章节的辅助函数
function addLectureFromInput(courseId) {
    const nameInput = document.querySelector(`.lecture-name-input[data-course-id="${courseId}"]`);
    const noteInput = document.querySelector(`.lecture-note-input[data-course-id="${courseId}"]`);
    
    if (nameInput && nameInput.value.trim()) {
        if (courseTracker.addLecture(courseId, nameInput.value, noteInput?.value || '')) {
            nameInput.value = '';
            if (noteInput) noteInput.value = '';
            courseTracker.render();
            showNotification('📚 章节已添加', 'success');
        }
    } else {
        showNotification('请输入章节名称', 'warning');
    }
}

// 添加/编辑课程笔记链接
function promptCourseNote(courseId) {
    const url = prompt('请输入课程笔记链接：');
    if (url !== null) {
        courseTracker.editCourseNote(courseId, url);
        courseTracker.render();
        if (url.trim()) {
            showNotification('📝 笔记链接已添加', 'success');
        }
    }
}

// 添加/编辑章节笔记链接
function promptLectureNote(courseId, lectureId) {
    const url = prompt('请输入章节笔记链接：');
    if (url !== null) {
        courseTracker.editLectureNote(courseId, lectureId, url);
        courseTracker.render();
        if (url.trim()) {
            showNotification('📝 笔记链接已添加', 'success');
        }
    }
}

// ==================== 音乐播放器系统 ====================
class MusicPlayer {
    constructor() {
        this.audioContext = null;
        this.audioElement = null;
        this.currentSource = null;
        this.gainNode = null;
        this.isPlaying = false;
        this.currentType = 'ambient';
        this.currentSound = null;
        
        // 白噪音生成器
        this.noiseGenerators = {
            rain: null,
            forest: null,
            ocean: null,
            wind: null
        };
    }
    
    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.gainNode = this.audioContext.createGain();
            this.gainNode.connect(this.audioContext.destination);
            this.gainNode.gain.value = 0.5;
        } catch (e) {
            console.error('音频初始化失败:', e);
        }
    }
    
    // 生成白噪音
    generateWhiteNoise() {
        const bufferSize = 2 * this.audioContext.sampleRate;
        const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        
        return noiseBuffer;
    }
    
    // 播放白噪音
    playAmbient(type) {
        this.stop();
        
        if (!this.audioContext) this.init();
        
        const source = this.audioContext.createBufferSource();
        source.buffer = this.generateWhiteNoise();
        source.loop = true;
        
        // 创建滤波器以模拟不同声音
        const filter = this.audioContext.createBiquadFilter();
        
        switch(type) {
            case 'rain':
                filter.type = 'lowpass';
                filter.frequency.value = 1000;
                filter.Q.value = 0.5;
                break;
            case 'ocean':
                filter.type = 'lowpass';
                filter.frequency.value = 500;
                filter.Q.value = 1;
                break;
            case 'forest':
                filter.type = 'bandpass';
                filter.frequency.value = 2000;
                filter.Q.value = 0.8;
                break;
            case 'wind':
                filter.type = 'highpass';
                filter.frequency.value = 800;
                filter.Q.value = 0.3;
                break;
        }
        
        source.connect(filter);
        filter.connect(this.gainNode);
        
        source.start(0);
        this.currentSource = source;
        this.currentType = 'ambient';
        this.currentSound = type;
        this.isPlaying = true;
        
        this.updateUI();
    }
    
    // 播放自定义音频
    playCustom(url) {
        this.stop();
        
        if (!this.audioContext) this.init();
        
        this.audioElement = new Audio(url);
        this.audioElement.crossOrigin = "anonymous";
        this.audioElement.loop = true;
        
        const source = this.audioContext.createMediaElementSource(this.audioElement);
        source.connect(this.gainNode);
        
        this.audioElement.play().then(() => {
            this.currentSource = source;
            this.currentType = 'custom';
            this.currentSound = url;
            this.isPlaying = true;
            this.updateUI();
            showNotification('🎵 音频加载成功', 'success');
        }).catch(err => {
            console.error('播放失败:', err);
            showNotification('❌ 音频加载失败，请检查链接', 'error');
        });
    }
    
    // 暂停
    pause() {
        if (this.audioElement) {
            this.audioElement.pause();
        } else if (this.currentSource) {
            this.currentSource.stop();
            this.currentSource = null;
        }
        this.isPlaying = false;
        this.updateUI();
    }
    
    // 恢复播放
    resume() {
        if (this.currentType === 'custom' && this.audioElement) {
            this.audioElement.play();
            this.isPlaying = true;
        } else if (this.currentType === 'ambient' && this.currentSound) {
            this.playAmbient(this.currentSound);
        }
        this.updateUI();
    }
    
    // 停止
    stop() {
        if (this.audioElement) {
            this.audioElement.pause();
            this.audioElement = null;
        }
        if (this.currentSource) {
            try {
                this.currentSource.stop();
            } catch(e) {}
            this.currentSource = null;
        }
        this.isPlaying = false;
    }
    
    // 设置音量
    setVolume(value) {
        if (this.gainNode) {
            this.gainNode.gain.value = value / 100;
        }
        if (this.audioElement) {
            this.audioElement.volume = value / 100;
        }
    }
    
    // 更新UI
    updateUI() {
        const playBtn = document.getElementById('musicPlayBtn');
        const pauseBtn = document.getElementById('musicPauseBtn');
        const nowPlayingText = document.getElementById('nowPlayingText');
        
        if (this.isPlaying) {
            if (playBtn) playBtn.style.display = 'none';
            if (pauseBtn) pauseBtn.style.display = 'inline-block';
            
            let displayText = '未播放';
            if (this.currentType === 'ambient') {
                const soundNames = {
                    rain: '🌧️ 雨声',
                    forest: '🌲 森林',
                    ocean: '🌊 海浪',
                    wind: '🍃 风声'
                };
                displayText = soundNames[this.currentSound] || '白噪音';
            } else if (this.currentType === 'custom') {
                displayText = '🎵 自定义音频';
            }
            if (nowPlayingText) nowPlayingText.textContent = displayText;
        } else {
            if (playBtn) playBtn.style.display = 'inline-block';
            if (pauseBtn) pauseBtn.style.display = 'none';
            if (nowPlayingText) nowPlayingText.textContent = '未播放';
        }
    }
}

const musicPlayer = new MusicPlayer();

// 初始化课程跟踪器
document.addEventListener('DOMContentLoaded', () => {
    courseTracker.render();
    
    // 添加课程按钮
    document.getElementById('addCourseBtn')?.addEventListener('click', () => {
        const nameInput = document.getElementById('courseNameInput');
        const noteInput = document.getElementById('courseNoteInput');
        
        if (nameInput && nameInput.value.trim()) {
            if (courseTracker.addCourse(nameInput.value, noteInput?.value || '')) {
                nameInput.value = '';
                if (noteInput) noteInput.value = '';
                courseTracker.render();
                showNotification('📖 课程已添加，开始修行吧！', 'success');
            }
        } else {
            showNotification('请输入课程名称', 'warning');
        }
    });
    
    // 回车添加课程
    document.getElementById('courseNameInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('addCourseBtn')?.click();
        }
    });
    
    // ==================== 音乐播放器事件 ====================
    
    // 浮动按钮显示/隐藏面板
    document.getElementById('musicFloatBtn')?.addEventListener('click', () => {
        const panel = document.getElementById('musicFloatPanel');
        if (panel) {
            panel.classList.toggle('show');
        }
    });
    
    // 关闭面板按钮
    document.getElementById('closeMusicPanel')?.addEventListener('click', () => {
        const panel = document.getElementById('musicFloatPanel');
        if (panel) {
            panel.classList.remove('show');
        }
    });
    
    // 播放/暂停按钮
    document.getElementById('musicPlayBtn')?.addEventListener('click', () => {
        if (musicPlayer.currentSound || musicPlayer.currentType === 'custom') {
            musicPlayer.resume();
        } else {
            showNotification('请先选择一种音乐或白噪音', 'warning');
        }
    });
    
    document.getElementById('musicPauseBtn')?.addEventListener('click', () => {
        musicPlayer.pause();
    });
    
    // 音量控制
    document.getElementById('volumeSlider')?.addEventListener('input', (e) => {
        const value = e.target.value;
        musicPlayer.setVolume(value);
        const volumeValue = document.getElementById('volumeValue');
        if (volumeValue) volumeValue.textContent = value;
    });
    
    // 音乐类型切换
    document.querySelectorAll('.music-tab-mini').forEach(tab => {
        tab.addEventListener('click', () => {
            const type = tab.dataset.type;
            
            // 切换标签激活状态
            document.querySelectorAll('.music-tab-mini').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 切换面板
            document.querySelectorAll('.music-source-panel').forEach(panel => panel.classList.remove('active'));
            if (type === 'ambient') {
                document.getElementById('ambientPanel')?.classList.add('active');
            } else {
                document.getElementById('customPanel')?.classList.add('active');
            }
        });
    });
    
    // 白噪音按钮
    document.querySelectorAll('.ambient-btn-mini').forEach(btn => {
        btn.addEventListener('click', () => {
            const sound = btn.dataset.sound;
            
            // 高亮当前选中
            document.querySelectorAll('.ambient-btn-mini').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 播放白噪音
            musicPlayer.playAmbient(sound);
            showNotification(`🎵 开始播放白噪音`, 'success');
        });
    });
    
    // 加载自定义音频
    document.getElementById('loadCustomAudio')?.addEventListener('click', () => {
        const urlInput = document.getElementById('customAudioUrl');
        const url = urlInput?.value.trim();
        
        if (url) {
            musicPlayer.playCustom(url);
        } else {
            showNotification('请输入音频链接', 'warning');
        }
    });
    
    // 回车加载自定义音频
    document.getElementById('customAudioUrl')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('loadCustomAudio')?.click();
        }
    });
    
    // ==================== 快捷菜单事件 ====================
    
    // 快捷菜单显示/隐藏
    document.getElementById('quickMenuBtn')?.addEventListener('click', () => {
        const panel = document.getElementById('quickMenuPanel');
        if (panel) {
            panel.classList.toggle('show');
        }
    });
    
    // 快捷菜单项点击
    document.querySelectorAll('.quick-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.action;
            const panel = document.getElementById('quickMenuPanel');
            if (panel) panel.classList.remove('show');
            
            switch(action) {
                case 'stats':
                    showStatsModal();
                    break;
                case 'report':
                    generateWeeklyReport();
                    break;
                case 'badges':
                    showBadgesModal();
                    break;
                case 'compare':
                    showCompareModal();
                    break;
                case 'export':
                    dataStore.exportData();
                    showNotification('📦 数据已导出！', 'success');
                    break;
                case 'focus':
                    focusMode.toggle();
                    break;
            }
        });
    });
    
    // 关闭统计面板
    document.getElementById('closeStatsModal')?.addEventListener('click', () => {
        document.getElementById('statsModal')?.classList.remove('show');
    });
    
    // 关闭报告面板
    document.getElementById('closeReportModal')?.addEventListener('click', () => {
        document.getElementById('reportModal')?.classList.remove('show');
    });
    
    // 关闭徽章墙
    document.getElementById('closeBadgesModal')?.addEventListener('click', () => {
        document.getElementById('badgesModal')?.classList.remove('show');
    });
    
    // 关闭对比面板
    document.getElementById('closeCompareModal')?.addEventListener('click', () => {
        document.getElementById('compareModal')?.classList.remove('show');
    });
    
    // 点击模态框外部关闭
    document.getElementById('statsModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'statsModal') {
            e.target.classList.remove('show');
        }
    });
    
    document.getElementById('reportModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'reportModal') {
            e.target.classList.remove('show');
        }
    });
    
    document.getElementById('badgesModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'badgesModal') {
            e.target.classList.remove('show');
        }
    });
    
    document.getElementById('compareModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'compareModal') {
            e.target.classList.remove('show');
        }
    });
    
    // ==================== 首次使用引导事件 ====================
    
    // 开始修行按钮
    document.getElementById('startJourney')?.addEventListener('click', () => {
        const dontShow = document.getElementById('dontShowAgain');
        if (dontShow && dontShow.checked) {
            localStorage.setItem('hasVisited', 'true');
        }
        
        document.getElementById('welcomeGuide')?.classList.remove('show');
        showNotification('🗡️ 欢迎来到墨池剑冢，开始你的修行之旅吧！', 'success');
        
        // 标记已访问（即使没勾选，本次也算访问过）
        if (!dontShow || !dontShow.checked) {
            localStorage.setItem('hasVisited', 'true');
        }
    });
    
    // 番茄钟模式切换
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            switchTimerMode(mode);
        });
    });
    
    // 学习提醒开关
    document.getElementById('notificationToggle')?.addEventListener('change', (e) => {
        const enabled = e.target.checked;
        const timeContainer = document.getElementById('notificationTimeContainer');
        
        if (enabled) {
            studyReminder.toggle(true);
            if (timeContainer) timeContainer.style.display = 'flex';
        } else {
            studyReminder.toggle(false);
            if (timeContainer) timeContainer.style.display = 'none';
        }
    });
    
    // 学习提醒时间选择
    document.getElementById('notificationTime')?.addEventListener('change', (e) => {
        const time = e.target.value;
        if (time !== 'custom') {
            studyReminder.setTime(time);
            showNotification(`⏰ 提醒时间已设置为 ${time}`, 'success');
        }
    });
    
    // 初始化学习提醒状态
    const notificationToggle = document.getElementById('notificationToggle');
    const notificationTimeContainer = document.getElementById('notificationTimeContainer');
    if (notificationToggle) {
        notificationToggle.checked = studyReminder.enabled;
        if (studyReminder.enabled && notificationTimeContainer) {
            notificationTimeContainer.style.display = 'flex';
            studyReminder.startChecking();
        }
    }
    
    // ESC 键关闭所有模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('statsModal')?.classList.remove('show');
            document.getElementById('reportModal')?.classList.remove('show');
            document.getElementById('badgesModal')?.classList.remove('show');
            document.getElementById('compareModal')?.classList.remove('show');
            document.getElementById('quickMenuPanel')?.classList.remove('show');
        }
    });
});
