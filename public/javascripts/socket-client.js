const socket = io();
// const adminSocket = io('/admin');

socket.on('connect', () => {
    let data = localStorage.getItem('account');

    data = data ? JSON.parse(data) : null;

    /**
     * Client join chat
     */
    socket.emit('client_join_chat', data);

    /**
     * Get identify from server and save to local storage
     */
    socket.on('client_identifier', (data) => {
        localStorage.setItem('account', JSON.stringify(data));
    })

    /**
     * Event receive message from server
     */
    socket.on('owner_message', (data) => {
        let messEl = document.createElement('li');
        messEl.textContent = data.messageContent;
        document.body.appendChild(messEl);

        /**
         * set partner
         */
        let sendMessBtn = document.getElementById('client_send_message');
        sendMessBtn.setAttribute('to', data.to);
    })

    /**
     * Event receive message from server
     */
    socket.on('message', (data) => {
        let messEl = document.createElement('li');
        messEl.textContent = data.messageContent;
        document.body.appendChild(messEl);

        /**
         * set partner
         */
        let sendMessBtn = document.getElementById('client_send_message');
        sendMessBtn.setAttribute('to', data.sender.room);
    });

    /**
     * Client send message to customer care
     */
    let sendMessBtn = document.getElementById('client_send_message');
    if (sendMessBtn) {
        sendMessBtn.onclick = function(e) {
            let messageContent = document.getElementById('message_content');
            if (messageContent) {
                let value = messageContent.value;
                let sender = localStorage.getItem('account'), dataSend = {};
    
                if (value && sender) {
                    /**
                     * Case existing user
                     */
                    sender = JSON.parse(sender);
    
                    dataSend = {
                        sender: sender,
                        to: 'room_customer_care',
                        messageContent: value
                    }
    
                    socket.emit('send_message', dataSend)
                    /**
                     * reset value after sent
                     */
                    messageContent.value = '';
                } else {
                    /**
                     * Case not existing user
                     */
                }
            }
        }
    }
});