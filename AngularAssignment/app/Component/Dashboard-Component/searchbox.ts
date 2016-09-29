import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'search-box',
	template:'<div>Hello</div>'
	// template:'<div><input type="text" #input (input)="update.emit(input.value)"></div>'
})

export class SearchBox {
	@Output() update = new EventEmitter();
	ngOnInit(){
		this.update.emit('');
	}
}