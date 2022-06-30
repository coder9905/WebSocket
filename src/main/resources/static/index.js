var stompClient = null;

$(document).ready(function () {

    connect();
    $(".send-btn").on("click",() => {
        stompClient.send("/app/send-message", {}, JSON.stringify({"name": $(".sms").val()})
        );
    })

})

function connect() {
    var sock = new SockJS("/websocket-example");
    if (sock != null) {
        stompClient = Stomp.over(sock);
        stompClient.connect({}, (frame) => {
            console.log(frame);

            if (stompClient != null) {
                stompClient.subscribe("/topic/message", function (data) {
                    console.log(data);
                    printMessages(data.body);
                })

            }

        });
    }
}

function printMessages(message) {
    $("#messages").append(
        '  <tr>   <td>' + message + '</td>\n' +
        "                    <td>" + new Date().toDateString() + "</td>\n" +
        "             </tr>   ")
}