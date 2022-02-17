        //set numbers of banners
        var nB = document.getElementById('banner-slides').childElementCount;
        //----------------------
        //inicialize timer
        var timer = setInterval(function() { auto_transition() }, 10000);
        //----------------------
        
        function manual_transition(n){
        clearInterval(timer);
        fade_in(n);    
        timer = setInterval(function() { auto_transition() }, 10000);
        } //end manual transition
        //----------------------
        
        
        function auto_transition(){
            
            var n = find_active();
            
            if (n < nB) {
                fade_in(n + 1);
            } else {
                fade_in(1);
            }
            
        } //end auto transition
        //----------------------
        
        function find_active(){
            
            var n;
            var bannerID = "";
            
            for (n = 1; n <= nB; n++) {
            bannerID = "banner" + n;
            if (document.getElementById(bannerID).classList.contains('fade-in') == true) {return n;}
            }
            
        } //end find active
        //----------------------
        
        function fade_in(n){
            
            
            //ativa o banner n
            var bannerID = "banner" + n;
            var bannerNAV = "banner-nav-" + n;
            
            document.getElementById(bannerNAV).style.backgroundColor = "#d64a4a";
            document.getElementById(bannerID).classList.remove('fade-out');
            document.getElementById(bannerID).classList.add('fade-in');
            
            //desativa os demais banners
            var i;
            for (i = 1; i <= nB; i++) {
                
                if ( i != n){
                    
                    bannerID = "banner" + i;
                    bannerNAV = "banner-nav-" + i;
                    document.getElementById(bannerNAV).style.backgroundColor = "#f6f6f5";

                    if (document.getElementById(bannerID).classList.contains('fade-in') == true) {
                        
                    document.getElementById(bannerID).classList.add('fade-out');
                    document.getElementById(bannerID).classList.remove('fade-in');

                    } //end contains('fade-in') == true

                } //end i != n ?
                
            } //end for loop
                    

            
        } //end fade-in
        //----------------------