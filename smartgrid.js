var smartgrid = require('smart-grid');

var    settings = {
        outputStyle: 'sass',
        columns: 12,
        offset: '30px',
        mobileFirst: false,
        container: {
            maxWidth: '1300px',
            fields: '30px'
        },
    breakPoints: {
        lg:{
            width: "1200px",
            fields: "25px"
        },
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false

};

smartgrid('app/sass', settings);

