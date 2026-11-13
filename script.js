// ==========================================
// 1. 主流二遊課金與卡池機率資料庫
// ==========================================
const gameDatabase = {
    genshin: {
        name: "原神",
        unit: "原石 / 創世結晶",
        costPerPull: 160,
        softPityStart: 75,
        hardPity: 90,
        guaranteedUpHardPity: 180,
        expectedPullsPerGold: 62.5,
        expectedPullsPerUp: 93.75,
        noFiftyFifty: false,
        ruleDescription: "75抽開始提升出金率，90抽必出金（50%歪），最非180抽大保底必出當期UP。",
        packages: [
            { name: "空月祝福 (小月卡 30天合計)", hasBonusToggle: false, firstStones: 3000, normalStones: 3000, twd: 170, jpy: 610 },
            { name: "珍珠紀行 (大月卡 折合原石)", hasBonusToggle: false, firstStones: 1320, normalStones: 1320, twd: 330, jpy: 1220 },
            { name: "60 創世結晶", hasBonusToggle: true, firstStones: 120, normalStones: 60, twd: 33, jpy: 120 },
            { name: "300 創世結晶 (常駐+30)", hasBonusToggle: true, firstStones: 600, normalStones: 330, twd: 170, jpy: 610 },
            { name: "980 創世結晶 (常駐+110)", hasBonusToggle: true, firstStones: 1960, normalStones: 1090, twd: 490, jpy: 1840 },
            { name: "1980 創世結晶 (常駐+260)", hasBonusToggle: true, firstStones: 3960, normalStones: 2240, twd: 990, jpy: 3680 },
            { name: "3280 創世結晶 (常駐+600)", hasBonusToggle: true, firstStones: 6560, normalStones: 3880, twd: 1690, jpy: 6100 },
            { name: "6480 創世結晶 (常駐+1600)", hasBonusToggle: true, firstStones: 12960, normalStones: 8080, twd: 3290, jpy: 12000 }
        ]
    },
    hsr: {
        name: "崩壞：星穹鐵道",
        unit: "星瓊 / 古老夢華",
        costPerPull: 160,
        softPityStart: 65,
        hardPity: 90,
        guaranteedUpHardPity: 180,
        expectedPullsPerGold: 55.6,
        expectedPullsPerUp: 83.4,
        noFiftyFifty: false,
        ruleDescription: "65抽開始提升出金率，90抽必出金（50%歪），最非180抽大保底必出當期UP。",
        packages: [
            { name: "列車補給憑證 (小月卡 30天合計)", hasBonusToggle: false, firstStones: 3000, normalStones: 3000, twd: 170, jpy: 610 },
            { name: "無名客的榮勳 (大月卡 折合星瓊)", hasBonusToggle: false, firstStones: 1320, normalStones: 1320, twd: 330, jpy: 1220 },
            { name: "60 古老夢華", hasBonusToggle: true, firstStones: 120, normalStones: 60, twd: 33, jpy: 120 },
            { name: "300 古老夢華 (常駐+30)", hasBonusToggle: true, firstStones: 600, normalStones: 330, twd: 170, jpy: 610 },
            { name: "980 古老夢華 (常駐+110)", hasBonusToggle: true, firstStones: 1960, normalStones: 1090, twd: 490, jpy: 1840 },
            { name: "1980 古老夢華 (常駐+260)", hasBonusToggle: true, firstStones: 3960, normalStones: 2240, twd: 990, jpy: 3680 },
            { name: "3280 古老夢華 (常駐+600)", hasBonusToggle: true, firstStones: 6560, normalStones: 3880, twd: 1690, jpy: 6100 },
            { name: "6480 古老夢華 (常駐+1600)", hasBonusToggle: true, firstStones: 12960, normalStones: 8080, twd: 3290, jpy: 12000 }
        ]
    },
    zzz: {
        name: "絕區零",
        unit: "菲林 / 菲林底片",
        costPerPull: 160,
        softPityStart: 65,
        hardPity: 90,
        guaranteedUpHardPity: 180,
        expectedPullsPerGold: 55.6,
        expectedPullsPerUp: 83.4,
        noFiftyFifty: false,
        ruleDescription: "65抽開始提升出金率，90抽必出金（50%歪），最非180抽大保底必出當期UP。",
        packages: [
            { name: "繩網會員 (小月卡 30天合計)", hasBonusToggle: false, firstStones: 3000, normalStones: 3000, twd: 170, jpy: 610 },
            { name: "麗都城募 (大月卡 折合菲林)", hasBonusToggle: false, firstStones: 1420, normalStones: 1420, twd: 330, jpy: 1220 },
            { name: "60 菲林底片", hasBonusToggle: true, firstStones: 120, normalStones: 60, twd: 33, jpy: 120 },
            { name: "300 菲林底片 (常駐+30)", hasBonusToggle: true, firstStones: 600, normalStones: 330, twd: 170, jpy: 610 },
            { name: "980 菲林底片 (常駐+110)", hasBonusToggle: true, firstStones: 1960, normalStones: 1090, twd: 490, jpy: 1840 },
            { name: "1980 菲林底片 (常駐+260)", hasBonusToggle: true, firstStones: 3960, normalStones: 2240, twd: 990, jpy: 3680 },
            { name: "3280 菲林底片 (常駐+600)", hasBonusToggle: true, firstStones: 6560, normalStones: 3880, twd: 1690, jpy: 6100 },
            { name: "6480 菲林底片 (常駐+1600)", hasBonusToggle: true, firstStones: 12960, normalStones: 8080, twd: 3290, jpy: 12000 }
        ]
    },
    wuwa: {
        name: "鳴潮",
        unit: "星聲 / 月相",
        costPerPull: 160,
        softPityStart: 65,
        hardPity: 80,
        guaranteedUpHardPity: 160,
        expectedPullsPerGold: 54.0,
        expectedPullsPerUp: 81.0,
        noFiftyFifty: false,
        ruleDescription: "65抽開始提升出金率，80抽必出金（50%歪），最非160抽大保底必出當期UP。",
        packages: [
            { name: "月相觀測卡 (小月卡 30天合計)", hasBonusToggle: false, firstStones: 3000, normalStones: 3000, twd: 170, jpy: 610 },
            { name: "寰宇頻道 (大月卡 折合星聲)", hasBonusToggle: false, firstStones: 1480, normalStones: 1480, twd: 330, jpy: 1220 },
            { name: "60 月相", hasBonusToggle: true, firstStones: 120, normalStones: 60, twd: 33, jpy: 120 },
            { name: "300 月相 (常駐+30)", hasBonusToggle: true, firstStones: 600, normalStones: 330, twd: 170, jpy: 610 },
            { name: "980 月相 (常駐+110)", hasBonusToggle: true, firstStones: 1960, normalStones: 1090, twd: 490, jpy: 1840 },
            { name: "1980 月相 (常駐+260)", hasBonusToggle: true, firstStones: 3960, normalStones: 2240, twd: 990, jpy: 3680 },
            { name: "3280 月相 (常駐+600)", hasBonusToggle: true, firstStones: 6560, normalStones: 3880, twd: 1690, jpy: 6100 },
            { name: "6480 月相 (常駐+1600)", hasBonusToggle: true, firstStones: 12960, normalStones: 8080, twd: 3290, jpy: 12000 }
        ]
    },
    endfield: {
        name: "明日方舟：終末地",
        unit: "嵌晶玉 (1源石=75玉)",
        costPerPull: 500,
        softPityStart: 65,
        hardPity: 80,
        expectedPullsPerGold: 54.0,
        isEndfieldModel: true,
        ruleDescription: "65抽加率、80抽必金(可能歪)；120抽必出首隻UP（期間歪掉不取消120保底）；取得首隻UP後轉為每240抽保底必出一隻UP。",
        packages: [
            { name: "協議月卡 (小月卡 30天合計)", hasBonusToggle: false, firstStones: 6750, normalStones: 6750, twd: 170, jpy: 610 },
            { name: "拓荒通行證 (大月卡 折合嵌晶玉)", hasBonusToggle: false, firstStones: 4000, normalStones: 4000, twd: 330, jpy: 1220 },
            { name: "開採衍質源石 (首購12石 / 常駐6石)", hasBonusToggle: true, firstStones: 900, normalStones: 450, twd: 60, jpy: 280 },
            { name: "開採一組衍質源石 (雙倍42石 / 常駐21石)", hasBonusToggle: true, firstStones: 3150, normalStones: 1575, twd: 260, jpy: 1200 },
            { name: "開採一堆衍質源石 (雙倍68石 / 常駐34石)", hasBonusToggle: true, firstStones: 5100, normalStones: 2550, twd: 390, jpy: 1800 },
            { name: "開採一袋衍質源石 (雙倍114石 / 常駐57石)", hasBonusToggle: true, firstStones: 8550, normalStones: 4275, twd: 620, jpy: 3000 },
            { name: "開採一盒衍質源石 (雙倍184石 / 常駐92石)", hasBonusToggle: true, firstStones: 13800, normalStones: 6900, twd: 990, jpy: 4800 },
            { name: "開採一箱衍質源石 (雙倍388石 / 常駐194石)", hasBonusToggle: true, firstStones: 29100, normalStones: 14550, twd: 2000, jpy: 10000 }
        ]
    },
    nte: {
        name: "異環",
        unit: "異象結晶",
        costPerPull: 160,
        softPityStart: 70,
        hardPity: 90,
        guaranteedUpHardPity: 90,
        expectedPullsPerGold: 60.0,
        expectedPullsPerUp: 60.0,
        noFiftyFifty: true,
        ruleDescription: "卡池不會歪（無大小保），70抽開始加機率，90抽硬保底必出當期UP角色。",
        packages: [
            { name: "異象補給卡 (小月卡 30天合計)", hasBonusToggle: false, firstStones: 3000, normalStones: 3000, twd: 170, jpy: 610 },
            { name: "都市通行證 (大月卡 折合結晶)", hasBonusToggle: false, firstStones: 1320, normalStones: 1320, twd: 330, jpy: 1220 },
            { name: "60 異象結晶", hasBonusToggle: true, firstStones: 120, normalStones: 60, twd: 33, jpy: 120 },
            { name: "300 異象結晶 (常駐+30)", hasBonusToggle: true, firstStones: 600, normalStones: 330, twd: 170, jpy: 610 },
            { name: "980 異象結晶 (常駐+110)", hasBonusToggle: true, firstStones: 1960, normalStones: 1090, twd: 490, jpy: 1840 },
            { name: "1980 異象結晶 (常駐+260)", hasBonusToggle: true, firstStones: 3960, normalStones: 2240, twd: 990, jpy: 3680 },
            { name: "3280 異象結晶 (常駐+600)", hasBonusToggle: true, firstStones: 6560, normalStones: 3880, twd: 1690, jpy: 6100 },
            { name: "6480 異象結晶 (常駐+1600)", hasBonusToggle: true, firstStones: 12960, normalStones: 8080, twd: 3290, jpy: 12000 }
        ]
    }
};

// 記錄每個檔位在「尚未購買（數量=0）」時是否擁有首儲雙倍資格
let bonusAvailableState = [];

// ==========================================
// 2. 互動功能一：切換遊戲並動態生成課金項目表格
// ==========================================
function renderPackages() {
    const gameSelect = document.getElementById("game-select");
    if (!gameSelect) return;

    const selectedKey = gameSelect.value;
    const gameData = gameDatabase[selectedKey];
    const tableBody = document.getElementById("package-table-body");

    document.getElementById("currency-unit-name").textContent = gameData.unit;
    document.getElementById("pull-cost-label").textContent = `${gameData.costPerPull} / 1抽`;
    document.getElementById("pity-rule-text").textContent = gameData.ruleDescription;

    // 初始化該遊戲每個檔位的雙倍資格狀態 (預設有雙倍的檔位皆為 true)
    bonusAvailableState = gameData.packages.map(pkg => pkg.hasBonusToggle);

    tableBody.innerHTML = "";

    gameData.packages.forEach((pkg, index) => {
        const row = document.createElement("tr");
        row.className = "package-row";

        let bonusCellHtml = `<span class="no-bonus-tag">固定規格</span>`;
        if (pkg.hasBonusToggle) {
            bonusCellHtml = `
                <div class="bonus-switch-wrap">
                    <label class="switch">
                        <input type="checkbox" class="bonus-toggle" data-index="${index}" checked onchange="handleManualBonusToggle(${index})">
                        <span class="slider"></span>
                    </label>
                    <span class="bonus-status-text" id="bonus-label-${index}">雙倍</span>
                </div>
            `;
        }

        row.innerHTML = `
            <td><input type="checkbox" class="pkg-check" data-index="${index}" onchange="toggleCheckbox(${index})"></td>
            <td onclick="clickRowCheckbox(${index})"><strong>${pkg.name}</strong></td>
            <td>${bonusCellHtml}</td>
            <td id="stones-cell-${index}" onclick="clickRowCheckbox(${index})">${pkg.firstStones.toLocaleString()}</td>
            <td onclick="clickRowCheckbox(${index})">NT$ ${pkg.twd.toLocaleString()}</td>
            <td onclick="clickRowCheckbox(${index})">¥ ${pkg.jpy.toLocaleString()}</td>
            <td><input type="number" class="qty-input" data-index="${index}" value="0" min="0" max="99" onchange="handleQtyChange(${index})" oninput="handleQtyChange(${index})"></td>
        `;

        tableBody.appendChild(row);
    });

    calculateSummary();
}

// 更新單一列的「開關UI」與「下次加點獲得資源」顯示
function updateRowBonusDisplay(index) {
    const selectedKey = document.getElementById("game-select").value;
    const pkg = gameDatabase[selectedKey].packages[index];
    if (!pkg.hasBonusToggle) return;

    const toggle = document.querySelector(`.bonus-toggle[data-index="${index}"]`);
    const label = document.getElementById(`bonus-label-${index}`);
    const stonesCell = document.getElementById(`stones-cell-${index}`);
    const qty = parseInt(document.querySelector(`.qty-input[data-index="${index}"]`).value) || 0;

    // 只有「原本有雙倍資格」且「目前購買數量為 0」時，下一單才是雙倍
    const canNextBeDouble = bonusAvailableState[index] && qty === 0;

    toggle.checked = canNextBeDouble;
    if (canNextBeDouble) {
        label.textContent = "雙倍";
        label.classList.remove("off");
        stonesCell.textContent = pkg.firstStones.toLocaleString();
    } else {
        label.textContent = "已用掉";
        label.classList.add("off");
        stonesCell.textContent = pkg.normalStones.toLocaleString();
    }
}

// 使用者手動撥動雙倍開關
function handleManualBonusToggle(index) {
    const toggle = document.querySelector(`.bonus-toggle[data-index="${index}"]`);
    const qtyInput = document.querySelector(`.qty-input[data-index="${index}"]`);

    if (toggle.checked) {
        // 手動開啟雙倍時，恢復雙倍資格並將數量歸零，讓使用者重新點選第1單
        bonusAvailableState[index] = true;
        qtyInput.value = 0;
        document.querySelector(`.pkg-check[data-index="${index}"]`).checked = false;
    } else {
        // 手動關閉雙倍，代表原本雙倍已經用掉了
        bonusAvailableState[index] = false;
    }

    updateRowBonusDisplay(index);
    calculateSummary();
}

// 一鍵開啟或關閉所有檔位的雙倍資格
function toggleAllBonuses(turnOn) {
    const selectedKey = document.getElementById("game-select").value;
    const gameData = gameDatabase[selectedKey];

    gameData.packages.forEach((pkg, index) => {
        if (pkg.hasBonusToggle) {
            bonusAvailableState[index] = turnOn;
            if (turnOn) {
                document.querySelector(`.qty-input[data-index="${index}"]`).value = 0;
                document.querySelector(`.pkg-check[data-index="${index}"]`).checked = false;
            }
            updateRowBonusDisplay(index);
        }
    });

    calculateSummary();
}

function clickRowCheckbox(index) {
    const checkbox = document.querySelector(`.pkg-check[data-index="${index}"]`);
    checkbox.checked = !checkbox.checked;
    toggleCheckbox(index);
}

// 勾選框變動：勾選=買1單（消耗掉首儲雙倍）；取消=0單（若原本有雙倍則恢復）
function toggleCheckbox(index) {
    const checkbox = document.querySelector(`.pkg-check[data-index="${index}"]`);
    const qtyInput = document.querySelector(`.qty-input[data-index="${index}"]`);
    qtyInput.value = checkbox.checked ? 1 : 0;
    handleQtyChange(index);
}

// 數量變動核心邏輯：單一次加點(>=1)後，開關自動關閉不再以雙倍計算
function handleQtyChange(index) {
    const checkbox = document.querySelector(`.pkg-check[data-index="${index}"]`);
    const qtyInput = document.querySelector(`.qty-input[data-index="${index}"]`);
    let qty = parseInt(qtyInput.value);
    if (isNaN(qty) || qty < 0) qty = 0;

    checkbox.checked = qty > 0;
    updateRowBonusDisplay(index);
    calculateSummary();
}

// 一鍵全選所有「目前仍保有雙倍資格」的檔位各 1 單（點選後雙倍即消耗完畢）
function selectAllFirstTime() {
    const selectedKey = document.getElementById("game-select").value;
    const gameData = gameDatabase[selectedKey];

    gameData.packages.forEach((pkg, index) => {
        const checkbox = document.querySelector(`.pkg-check[data-index="${index}"]`);
        const qtyInput = document.querySelector(`.qty-input[data-index="${index}"]`);

        if (pkg.hasBonusToggle && bonusAvailableState[index]) {
            checkbox.checked = true;
            qtyInput.value = 1;
        } else {
            checkbox.checked = false;
            qtyInput.value = 0;
        }
        updateRowBonusDisplay(index);
    });

    calculateSummary();
}

// 清空購買數量（原本有雙倍資格的檔位會自動恢復可選雙倍狀態）
function resetSelection() {
    const selectedKey = document.getElementById("game-select").value;
    const gameData = gameDatabase[selectedKey];

    gameData.packages.forEach((pkg, index) => {
        document.querySelector(`.pkg-check[data-index="${index}"]`).checked = false;
        document.querySelector(`.qty-input[data-index="${index}"]`).value = 0;
        updateRowBonusDisplay(index);
    });

    calculateSummary();
}

// ==========================================
// 3. 互動功能二：計算總抽數、保底至期望角色數量與跨區省錢金額
// ==========================================
function calculateGachaExpectation(totalPulls, gameData) {
    const minGold = Math.floor(totalPulls / gameData.hardPity);
    const expectedGold = totalPulls / gameData.expectedPullsPerGold;

    let minUp = 0;
    let expectedUp = 0;

    if (gameData.isEndfieldModel) {
        if (totalPulls >= 120) {
            minUp = 1 + Math.floor((totalPulls - 120) / 240);
        } else {
            minUp = 0;
        }

        if (totalPulls <= 76) {
            expectedUp = totalPulls / 76;
        } else {
            expectedUp = 1 + (totalPulls - 76) / 108;
        }
    } else if (gameData.noFiftyFifty) {
        minUp = Math.floor(totalPulls / gameData.guaranteedUpHardPity);
        expectedUp = totalPulls / gameData.expectedPullsPerUp;
    } else {
        minUp = Math.floor(totalPulls / gameData.guaranteedUpHardPity);
        expectedUp = totalPulls / gameData.expectedPullsPerUp;
    }

    return {
        minGold,
        expectedGold: expectedGold.toFixed(2),
        minUp,
        expectedUp: expectedUp.toFixed(2)
    };
}

function calculateSummary() {
    const gameSelect = document.getElementById("game-select");
    if (!gameSelect) return;

    const selectedKey = gameSelect.value;
    const gameData = gameDatabase[selectedKey];
    const currencyMode = document.getElementById("currency-select").value;
    const jpyRate = parseFloat(document.getElementById("jpy-rate").value) || 0.215;

    let totalStones = 0;
    let totalTwd = 0;
    let totalJpy = 0;

    const qtyInputs = document.querySelectorAll(".qty-input");
    qtyInputs.forEach((input, index) => {
        const qty = parseInt(input.value) || 0;
        if (qty > 0) {
            const pkg = gameData.packages[index];

            // 若該檔位原本保有雙倍資格：第 1 單獲得首儲雙倍石頭，第 2 單起全部以常駐石頭計算
            if (pkg.hasBonusToggle && bonusAvailableState[index]) {
                totalStones += pkg.firstStones + (qty - 1) * pkg.normalStones;
            } else {
                totalStones += qty * pkg.normalStones;
            }

            totalTwd += pkg.twd * qty;
            totalJpy += pkg.jpy * qty;
        }
    });

    const totalPulls = totalStones / gameData.costPerPull;
    const expectation = calculateGachaExpectation(totalPulls, gameData);

    const jpyInTwd = Math.round(totalJpy * jpyRate);
    const savedTwd = totalTwd - jpyInTwd;
    const savedPercent = totalTwd > 0 ? ((savedTwd / totalTwd) * 100).toFixed(1) : 0;

    document.getElementById("total-stones").textContent = totalStones.toLocaleString();
    document.getElementById("total-pulls").textContent = `${totalPulls.toFixed(2)} 抽`;
    document.getElementById("total-gold-display").textContent = `${expectation.minGold} 隻 ～ ${expectation.expectedGold} 隻`;
    document.getElementById("up-character-display").textContent = `${expectation.minUp} 隻 ～ ${expectation.expectedUp} 隻`;

    if (currencyMode === "JPY") {
        document.getElementById("selected-currency-title").textContent = "日區結算總金額 (JPY 折合台幣)";
        document.getElementById("total-cost-display").textContent = `¥${totalJpy.toLocaleString()} (約 NT$${jpyInTwd.toLocaleString()})`;
    } else {
        document.getElementById("selected-currency-title").textContent = "台區結算總金額 (TWD 原價)";
        document.getElementById("total-cost-display").textContent = `NT$ ${totalTwd.toLocaleString()}`;
    }

    if (savedTwd >= 0) {
        document.getElementById("saved-amount-display").textContent = `NT$ ${savedTwd.toLocaleString()} (省 ${savedPercent}%)`;
    } else {
        document.getElementById("saved-amount-display").textContent = `無價差優勢 (多 NT$ ${Math.abs(savedTwd).toLocaleString()})`;
    }
}

window.addEventListener("DOMContentLoaded", renderPackages);