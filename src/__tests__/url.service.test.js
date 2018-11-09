import {secureUrl, getDefaultImg} from '../components/driver/url.service';

it('SSL Secure Url', () => {
    expect(secureUrl('')).toEqual(getDefaultImg());
    expect(secureUrl('http://img.com')).toEqual('https://img.com');
    expect(secureUrl('https://img.com')).toEqual('https://img.com');
});
