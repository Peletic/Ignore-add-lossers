let ignoreList = ["OhTryhqrd",
"Scubacrazy",
"feelNavyblue",
"sofiq",
"H7_D",
"FrankJumson",
"Risoc",
"KDubOnTop",
"mirrorfarmerr",
"TerminatorArch",
"potatomaster17",
"BiK_D",
"osmydabot",
"Egemam",
"CalvinE",
"zwMatters",
"LogicalLiquids",
"Fantazium",
"Nitroxyle",
"Zykore",
"ElAlexioMC"]

register('command', () => {
    let i = 0;
    function a () {
    if(i < ignoreList.length){
        ChatLib.command(`ignore add ${ignoreList[i]}`)
        ChatLib.chat(`Ignoring ${ignoreList[i]}`)
        i++
        setTimeout(a, 100)
    } else {
        ChatLib.chat('Finished ignoring the people')
        return;
    }
    }
    a()
}).setName("ignorethepeople").setAliases('itp', 'ignorelist', 'loserslist')
register('command', () => {
    let i = 0;
    function a () {
    if(i < ignoreList.length){
        ChatLib.command(`ignore remove ${ignoreList[i]}`)
        ChatLib.chat(`Unignoring ${ignoreList[i]}`)
        i++
        setTimeout(a, 100)
    } else {
        ChatLib.chat('Finished unignoring the people')
        return;
    }
    }
    a()
}).setName("unignorethepeople").setAliases('itp2', 'unignorelist', 'winnerslist')