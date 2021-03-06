'use strict';

function create(userId, photoId) {
  return {
    sizes: {
      canblog: 0,
      canprint: 0,
      candownload: 1,
      size: [
        {
          label: 'Square',
          width: 75,
          height: 75,
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_8c05e5e7c5_s.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/sq/',
          media: 'photo'
        },
        {
          label: 'Large Square',
          width: '150',
          height: '150',
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_8c05e5e7c5_q.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/q/',
          media: 'photo'
        },
        {
          label: 'Thumbnail',
          width: '100',
          height: '67',
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_8c05e5e7c5_t.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/t/',
          media: 'photo'
        },
        {
          label: 'Small',
          width: '240',
          height: '160',
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_8c05e5e7c5_m.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/s/',
          media: 'photo'
        },
        {
          label: 'Small 320',
          width: '320',
          height: 213,
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_8c05e5e7c5_n.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/n/',
          media: 'photo'
        },
        {
          label: 'Medium',
          width: '500',
          height: '333',
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_8c05e5e7c5.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/m/',
          media: 'photo'
        },
        {
          label: 'Medium 640',
          width: '640',
          height: '427',
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_8c05e5e7c5_z.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/z/',
          media: 'photo'
        },
        {
          label: 'Medium 800',
          width: '800',
          height: 534,
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_8c05e5e7c5_c.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/c/',
          media: 'photo'
        },
        {
          label: 'Large',
          width: '1024',
          height: '683',
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_8c05e5e7c5_b.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/l/',
          media: 'photo'
        },
        {
          label: 'Large 1600',
          width: '1600',
          height: 1067,
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_acbcf7928c_h.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/h/',
          media: 'photo'
        },
        {
          label: 'Large 2048',
          width: '2048',
          height: 1365,
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_e74a5895a5_k.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/k/',
          media: 'photo'
        },
        {
          label: 'Original',
          width: '2124',
          height: '1416',
          source: 'https://farm8.staticflickr.com/7347/' + photoId + '_dc157b85b9_o.jpg',
          url: 'https://www.flickr.com/photos/' + userId + '/' + photoId + '/sizes/o/',
          media: 'photo'
        }
      ]
    },
    stat: 'ok'
  };
}

module.exports = {
  create: create
};
