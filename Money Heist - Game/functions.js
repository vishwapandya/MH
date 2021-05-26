function story(){
    if(mousePressedOver(next)){
        next.destroy()
        sprite.destroy()
        greeting.destroy()
        storyPage.visible= true
        storyPage.scale = 0.8
        cont.visible = true
    }
}

function rules(){
    if(storyPage.visible===true&&mousePressedOver(cont)){
        storyPage.destroy()
        cont.destroy()
        rulesPage.visible = true
        starting.visible = true
    }
}

function levelstart(){
    if(starting.visible === true&&mousePressedOver(starting)){
        starting.destroy()
        sprite5.visible = false
        nextlevel.visible = true
        
    }
}

