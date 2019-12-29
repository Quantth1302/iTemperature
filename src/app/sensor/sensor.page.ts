import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.sevice';
import {FormGroup, FormControl, Validators } from "@angular/forms";
//ionic storage
import { Storage } from "@ionic/storage";

import { IMqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {

  temperature: number = 23;
  humidity: number = 60;
  array: string[];
  date: Date;
  funny: number;
  constructor(private _mqttService: MqttService) {
    this._mqttService.observe('testtopic/3').subscribe((message: IMqttMessage)=>{
      this.date = new Date();
      this.array = message.payload.toString().trimLeft().split(" ");
      this.temperature = parseInt(this.array[0]);
      this.humidity = parseInt(this.array[1]);
      console.log(this.array);
      console.log(this.temperature);
    });
    var blink_speed = 500;
    var t = setInterval(function () {
      var ele = document.getElementById('blik');
      ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
    }, blink_speed);
  }
  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 0, retain: true});
  }
  ngOnInit() {
  }

}