const ignoreList = []

fetch('https://raw.githubusercontent.com/peletic/example-gist/main/usernames').then(res => {
    res.text().then(res => {
        console.log(res)
        const lines = res.split(/\r?\n/)
        lines.pop()
        ignoreList.push(...lines)
    })
})

function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

register('command', async () => {
    for (const ign of ignoreList) {
        ChatLib.command(`ignore add ${ign}`)
        ChatLib.chat(`Ignoring ${ign}`)
        await sleep(Math.random() * 500)
    }
    ChatLib.chat(`Finished ignoring the ${ignoreList.length} people`)
}).setName("ignorethepeople").setAliases('itp', 'ignorelist', 'loserslist')

register('command', async () => {
    for (const ign of ignoreList) {
        ChatLib.command(`ignore remove ${ign}`)
        ChatLib.chat(`Unignoring ${ign}`)
        await sleep(Math.random() * 500)
    }
    ChatLib.chat(`Finished unignoring the ${ignoreList.length} people`)
}).setName("unignorethepeople").setAliases('itp2', 'unignorelist', 'winnerslist')