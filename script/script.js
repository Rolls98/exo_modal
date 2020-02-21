var btn = document.getElementById("btn");
        var modal = document.getElementById("test");
        var form = document.querySelector(".part_form");
        var value = false;

        function compare_id(id_e_target, el) {

            for (var i = 0; i < el.children.length; i++) {
                if (id_e_target == el.children[i]) {
                    value = true;
                }
                if (el.children[i].children.length) {
                    return compare_id(id_e_target, el.children[i]);
                }

            }

            return value;
        }

        document.body.addEventListener("click", function (e) {
            if (compare_id(e.target, modal)) {
                // test.style.display = "block";

                // alert("hello");
                value = false;
            } else {
                test.style.display = "block";
                setTimeout(function () {
                    test.classList.toggle("modal");
                    test.classList.toggle("nomodal");


                    if (test.classList.contains("nomodal")) {
                        test.style.opacity = 0;
                        form.style.marginTop = "-600px";
                        setTimeout(function () {
                            form.style.opacity = 0;
                        }, 100);
                    } else {
                        test.style.opacity = 1;
                        form.style.opacity = 1;
                        form.style.marginTop = "50px";
                    }
                }, 100);

            }
        })