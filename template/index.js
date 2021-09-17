const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = (message) => console.log(chalk.green(`${message}`))
const successLog = (message) => console.log(chalk.blue(`${message}`))
const errorLog = (error) => console.log(chalk.red(`${error}`))
const {currentDay} = require('./util')
//引入模板
const {htmlTemplate, JsTemplate} = require('./template')
//生成文件
const generateFile = (path, data) => {
    if (fs.existsSync(path)) {
        errorLog(`${path}文件已存在`)
        return
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', (err) => {
            if (err) {
                errorLog(err.message)
                reject(err)
            } else {
                resolve(true)
            }
        })
    })
}
// 文件数据流的控制
process.stdin.on('data', async (chunk) => {
    //当前键入的值
    const inputName = String(chunk).trim().toString()
    const componentPath = resolve('../demoDir', currentDay + '.html')
    const jsPath = resolve('../demoDir', currentDay + '.js')
    const htmlFilePath = resolve(componentPath)
    const jsFilePath = resolve(jsPath)
    if (!inputName) {
        log('正在生成html文件...')
        await generateFile(htmlFilePath, htmlTemplate())
        log('正在生成js文件...')
        await generateFile(jsFilePath, JsTemplate())
        successLog('生成成功')
    }
    if (inputName === 'js') {
        log('正在生成js文件...')
        await generateFile(jsFilePath, JsTemplate())
        successLog('生成成功')
    }
    if (inputName === 'html') {
        log('正在生成html文件...')
        await generateFile(htmlFilePath, htmlTemplate())
        successLog('生成成功')
    }
    process.stdin.emit('end')
})
process.stdin.on('end', () => {
    log('exit')
    process.exit()
})
