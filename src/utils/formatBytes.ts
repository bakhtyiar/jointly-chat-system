export function formatBytes(bytes) {
    if (bytes === 0) {
        return '0 B';
    }

    var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    var i = Math.floor(Math.log(bytes) / Math.log(1024));

    // Округление до двух десятичных знаков
    var formattedValue = (bytes / Math.pow(1024, i)).toFixed(2);

    return formattedValue + ' ' + sizes[i];
}