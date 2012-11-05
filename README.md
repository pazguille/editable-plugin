# Editable JS

Simple and tiny in-place Editor

## Use

### HTML
	<div>
		<span id="example-one">Everything contained</span> within this div is editable in browsers that support <span id="example-two">HTML5</span>. Go on, give it a try: click it and start typing.
	</div>

### CSS
	[contenteditable] {
		cursor: pointer;
	}

	[contenteditable]:focus,
	[contenteditable]:hover {
		outline: none;
		background-color: #FFFFD3;
	}

	[contenteditable]:focus {
		outline: 1px solid #EEEEEE;
		box-shadow: inset 1px 1px rgba(100, 100, 100, .1);
	}

### JavaScript
```javascript
	var $edit = $('#example-one').editable(); // returns a $querySelector

	$edit.on('done.editable', function (event, data) {
		console.log('Done: ' + data);
	});

	$edit.on('cancel.editable', function (event, data) {
		console.log('Cancel: ' + data);
	});
```

## Contact
- Guille Paz (Frontend developer - JavaScript developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
### The MIT License
Copyright (c) 2012 [@pazguille](http://twitter.com/pazguille)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.