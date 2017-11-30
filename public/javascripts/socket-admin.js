const socket = io();
// const adminSocket = io('/admin');

socket.on('connect', () => {
    console.log('send login info');
    socket.emit(
        'account_info',
        { 
            userName: 'admin',
            email: 'admin@gmail.com',
            password: '123456'
        }
    );
    socket.on('test_mess', (data) => {
        console.log('receive data', data);
    })
});