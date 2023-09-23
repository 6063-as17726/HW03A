# p5.js Template

This code is a pattern compromising of small and big ellipses. 
For my process, I first decided to make an even pattern of small ellipses over the entire canvas. 
Once that was done, I began creating the bigger ellipses such that they overlap the smaller ellipses alternatively. Since they were both black, I did not have to remove the smaller ellipses in those spaces. 
The next step was to alternate the big ellipses, which was the most challenging part. I intitially used % with xpos and ypos, but with the help of some sketching, I realized that it would not work. So, I created a variable 'x', which incremented with the loop. Based on the 'x' value, the big ellipses would start either at the 0 position, or the second position, which was 40. 
![D9GRS4.jpg](https://imgpile.com/images/D9GRS4.jpg)

This is a README file that can be used to describe and document your assignment.

Markdown Cheatsheet (from [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)):

---
---

# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6

**bold text**

*italicized text*

~~strikethrough text~~

Ordered List:
1. First item
2. Second item
3. Third item

Unordered List:
- First item
- Second item
- Third item

`short code block`

```
extended code block
fun() {
  return 0
}
```

Link:  
[linked text](https://www.example.com)


Image with url:  
![image description](https://dm-gy-6063-2023f-d.github.io/assets/homework/02/clark-espaco-modulado-00.jpg)


Image on repo:  
![image description](./file-name.jpg)


To start a new line, add two spaces at the end of a line, like this:  
this is a new line.


To start a new paragraph, leave an empty line between two lines of text.

This is a new paragraph.
