import { Component, Prop, PropDidChange, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'my-progress',
  styleUrl: 'my-progress.scss',
  shadow: true,
})
export class MyApp {
  @Prop() loadinMessage: string = "Loading";
  @Prop() progress: number = 50;
  @Event() completed: EventEmitter;

  @PropDidChange('progress')
  didChangeHandler(newProgress) {
    if(newProgress >= 100) {
      console.log('Firing completed event')
      this.completed.emit(true);
    }
  }

  getProgress(): string {
    if(this.progress < 0) return '0';
    if(this.progress > 100) return '100%';
    return `${this.progress}%`;
  }

  render() {
    return (
      <div class="progress">
        <h3>{this.loadinMessage}</h3>
        <div class="progress-wrapper">
          <div class="progress-fill" style={{width: this.getProgress()}}>
          </div>
          <span>{this.getProgress()}</span>
        </div>
      </div>
    );
  }
}
