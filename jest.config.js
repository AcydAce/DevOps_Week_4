module.exports = {
    reporters: [
        'default', ['Jest-Junit', { outputDirectory: 'reports', outputName: 'report.xml'}],
    ],
}