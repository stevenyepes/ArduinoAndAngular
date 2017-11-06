#include "DHT.h"
#include <SoftwareSerial.h>

SoftwareSerial Serial3(3, 2); // RX | TX

//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22  (AM2302), AM2321
//#define DHTTYPE DHT21   // DHT 21 (AM2301)


const int DHTPin = 5;     // what digital pin we're connected to
const int ledPIN = 13;
DHT dht(DHTPin, DHTTYPE);
//int volumen;

void setup() {
  Serial.begin(38400);
  Serial3.begin(38400);
  Serial.println("DHTxx test!");
  Serial3.println("WIFI test!");
  delay(20000);
  dht.begin();
  pinMode(ledPIN, OUTPUT);
}

void enviarDatos(String mensaje, float temp, float hum ,int operacion) {

  Serial3.println("HTTP/1.1 200 OK");
  Serial3.println("Content-Type: application/json");
  Serial3.println("Access-Control-Allow-Origin: *");
  Serial3.println("Connection: keep-alive");

  String sr = "{ \"humedad\": ";
  sr += hum;
  sr += ", \"temperatura\": ";
  sr += temp;
  sr += ", \"incidencia\": ";
  sr += mensaje;
  sr += "}";

  Serial3.print("Content-Length: ");
  Serial3.print(sr.length());
  Serial3.print("\r\n\r\n");
  Serial3.print(sr);
  Serial.println(sr);
  digitalWrite(ledPIN, operacion);



}

void loop() {
  // Wait a few seconds between measurements.
  delay(2000);
  //volumen = analogRead(A0);
  //Serial.println(volumen);
  // Reading temperature or humidity takes about 250 milliseconds!
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  // Serial3.available() &&
  if (Serial3.available() && t > 25) {

    enviarDatos("\"Alerta, la temperatura ha subido mas de lo recomendado!\"",t, h, HIGH);


  } else {

    enviarDatos("\"\"",t, h ,LOW);
  }

  Serial.print("Humidity: ");
  Serial.print(h);
  Serial.println(" %\t");
  Serial.print("Temperature: ");
  Serial.print(t);
  Serial.println(" *C ");
}
