var assets = {
  base: { width: 336, height: 112, image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAABwBAMAAAC6HTVoAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVUOEfk/Ytzvy6c5llVgCLXqEze2JX////FcUEnAAAAAWJLR0QHFmGI6wAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+MDDAACE+f6JbgAAACmSURBVHja7c5BCQIBAAVRK1jBClawghXsH0HYu7AHYefDm9Mc3+2mP3cfaQf6OHoelX8M2vH8/C1oyPPzp6BXG079EvRyw6kfgl5vOPU70IDh1O9AXyPtQN8j7UA/I4GC1gMFrQcKWg8UtB4oaD1Q0HqgoPVAQeuBgtYDBa0HCloPFLQeKGg9UNB6oKD1QEHrgYLWAwWtBwpaDxS0HihoPVDQejPQL4Py73DUmV51AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAzLTExVDE4OjAyOjE5KzA2OjAw4So5wwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMy0xMVQxODowMjoxOSswNjowMJB3gX8AAAAASUVORK5CYII=' },
  background: { width: 276, height: 512, image: 'data:image/png;base64,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' },
  bird: { width: 34, height: 24, image: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAYBAMAAABtiDI6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAG1BMVEUAAABTOEb614z6+vr4tzPX5sz8OADggCz///+gdOUrAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfjAwwAAhPn+iW4AAAAa0lEQVQY043RWRHAIAwE0FhYC7GAhVioBSzEfnPQQjlmul/wBjIkEEUQoSGzAMyMUnAW24sYdJrFS4rJZZC0SJ7+IQ+dhG3BUbt1sgpFBw41gp34E1UVtU9kIxrBe2kjhLRhsKu0wY8/8ZEbVjg2uawL1iMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDMtMTFUMTg6MDI6MTkrMDY6MDDhKjnDAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAzLTExVDE4OjAyOjE5KzA2OjAwkHeBfwAAAABJRU5ErkJggg==','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAYBAMAAABtiDI6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAG1BMVEUAAABTOEb614z6+vr4tzPX5sz8OADggCz///+gdOUrAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfjAwwAAhPn+iW4AAAAaUlEQVQY04XR0Q3AIAgEUFa4FVjBFVihK7iC6/dE2tqi6f3dS8SIIh54ZMpXAFVFKdgLuxnhoSRgpxyEoCQw+5eeoI34rcUpXrIQJSgF1YOFjMmtod4bySKsPbgOrUQwbFpslpg+/8RLTmK0NnWK1qPLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAzLTExVDE4OjAyOjE5KzA2OjAw4So5wwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMy0xMVQxODowMjoxOSswNjowMJB3gX8AAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAYBAMAAABtiDI6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAG1BMVEUAAABTOEb614z6+vr4tzPX5sz8OADggCz///+gdOUrAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfjAwwAAhPn+iW4AAAAaklEQVQY043RUQ3AIAwE0Fo4C7WAhVqYhVnA/o4bsGWFZPdFX2goYKZAsVe+Arg7SsFeWEcQHkoC1pSD0CkJIv6KaCstonGTJHBudhJOBSvR9LXinF0rcUKju2khOr2KxsNmmXNb+oq+vgB2WTfJA0O2FgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMy0xMVQxODowMjoxOSswNjowMOEqOcMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDMtMTFUMTg6MDI6MTkrMDY6MDCQd4F/AAAAAElFTkSuQmCC'] },
  pipe: { width: 52, height: 320, image: 'data:image/png;base64,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' },
}