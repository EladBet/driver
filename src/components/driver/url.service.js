const defaultProfileImage = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

export function secureUrl(url) {
    if (!url) {
        return defaultProfileImage;
    }
    if (url.indexOf('https') < 0) {
        url = url.replace('http', 'https');
    }
    return url;
}

export function getDefaultImg() {
    return defaultProfileImage
}
