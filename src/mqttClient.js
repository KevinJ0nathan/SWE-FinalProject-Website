import mqtt from "mqtt";

let client;

function createClient() {
  if (!client) {
    client = mqtt.connect("ws://localhost:9001", {
      clientId: "react_" + Math.random().toString(16).substr(2, 8),
    });

    client.on("connect", () => {
      console.log("MQTT Connected");
      client.subscribe("light_state");
      client.subscribe("telemetry")
    });

    client.on("error", (err) => console.log("MQTT Error:", err));
    client.on("close", () => console.log("MQTT disconnected"));
  }

  return client;
}

export default createClient();
