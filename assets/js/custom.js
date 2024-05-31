
var selectedProducts = [];


jQuery(document).ready(function() {
	jQuery("#myInput").on("keyup", function() {
		var value = jQuery(this).val().toLowerCase();
		jQuery("#myTable tr").filter(function() {
			jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});


jQuery(document).ready(function() {
	jQuery(document).on("click", ".footable-pagination-wrapper ul.pagination", function() {
		//higlight selected row
		//get ids from selectedProducts, add highlight class
		jQuery(".ninja_footable tr").removeClass("highlight");
		if (selectedProducts) {
			setTimeout(function() {
				for (var i = 0; i <= selectedProducts.length - 1; i++) {
					var id = selectedProducts[i]["id"];
					jQuery(".ninja_footable tr." + id).addClass("highlight");
				}
			}, 500);
		}


	});

	jQuery(document).on("click", ".ninja_footable tr[class^=ninja_table_row]", function(event) {
		var currentRow = jQuery(this);
		var id = currentRow[0].classList.item(1);
		if (!currentRow.hasClass("highlight")) {
			currentRow.addClass("highlight");
		} else {
			//remove product from array and update count
			currentRow.removeClass("highlight");
			selectedProducts = jQuery.grep(selectedProducts, function(e) {
				return e.id != id;
			});
			jQuery('#selected').html(selectedProducts.length);
			return;
		}

		//continue adding to array
		var currentHeaderRow = currentRow.closest('table').find('.footable-header');
		var totalColums = currentRow[0].cells.length;

		var selectedProductObj = {};
		const exists = selectedProducts.some(el => el.id === id);
		if (exists) {
			return;
		} //do not add duplicates

		selectedProductObj["id"] = id;
		for (var i = 0; i <= totalColums - 1; i++) {
			var headerVal = currentHeaderRow.find("th:eq(" + i + ")").text();
			var columnVal = currentRow.find("td:eq(" + i + ")").text();
			selectedProductObj[headerVal] = columnVal;
		}

		selectedProducts.push(selectedProductObj);
		jQuery('#selected').html(selectedProducts.length);
	});

	function buildSelectedProducts() {
		jQuery("#accordion_new").html("");
		if (selectedProducts) {
			var selectedProductsHtml = "";
			var stockNumber = "";
			for (var i = 0; i <= selectedProducts.length - 1; i++) {
				var listInnerHtml = "";
				var productObj = selectedProducts[i];
				for (const property in productObj) {
					if (property == "id") {
						continue;
					} //id is not for display -- internal use
					if (property.toLowerCase() == "stock number" || property.toLowerCase() == "part number") {
						stockNumber = productObj[property];
						continue;
					}
					listInnerHtml += "<li><a href='#'><span class='descr'>" + property + " : </span> <span>" + productObj[property] + "</span></a></li>"
				}
				var uiDisplayNumber = i + 1;
				selectedProductsHtml += "<li class='selectedrow'><input type='hidden' name='title[]' value='" + stockNumber + "'><div class='first_drop_down'><div class='left_side_product'><p>" + uiDisplayNumber + "</p></div><div class='center_side_product'><div class='link drpd" + uiDisplayNumber + "' id='" + uiDisplayNumber + "'>" + stockNumber + "<i class='fa fa-chevron-down'></i></div><ul class='submenu_new' id='submenu_new" + uiDisplayNumber + "'>" +
					listInnerHtml +
					"</ul></div><div class='right_side_product'><input type='number' name='quantity[]' min='1' value='1'></div><div class='delet_right_side_product'> <i class='fa fa-trash deleterecord' id='deleterecord" + uiDisplayNumber + "' data-id='" + productObj["id"] + "'></i> </div></div></li>"
			}

			jQuery("#accordion_new").append(selectedProductsHtml);

		}
	}

	jQuery('#myBtn').click(function() {
		buildSelectedProducts();
	});

	jQuery(document).on("click", ".deleterecord", function(event) {
		var id = jQuery(this).data('id');

		jQuery(".ninja_footable tr." + id).removeClass("highlight");
		selectedProducts = jQuery.grep(selectedProducts, function(e) {
			return e.id != id;
		});

		jQuery('#selected').html(selectedProducts.length);
		jQuery(this).parents('li').first().remove();
	});

	jQuery(".sdFilter").click(function() {
		if (jQuery(this).hasClass("active")) { //already selected
			return;
		}
		jQuery(this).siblings().removeClass("active");
		jQuery(this).addClass("active");

		var searchText = jQuery(this).text();
		var chk = jQuery(".footable-filtering-search :input[type='checkbox']");
		//clear search text if 'show all'
		if (searchText == "Show All") {
			searchText = "";
			chk.each(function() { //reset desc filter
				this.checked = true;
			});
		} else {
			chk.each(function() {
				var val = this.nextSibling.nodeValue.trim();
				if (val.toUpperCase() == "FIBER QTY" || val.toUpperCase() == "FIBER TYPE") {
					this.checked = true; //only search in mentioned fields
				} else {
					this.checked = false;
				}
			});
		}

		var input = jQuery(".footable-filtering-search :input[type='text']");
		var searchBtn = jQuery(".footable-filtering-search :button[type='submit']");
		searchBtn.click();

		setTimeout(function() {
			input.val(searchText);
			searchBtn.click();
		}, 500);
	});
});


jQuery(document).ready(function() {
	jQuery(document).on("click", ".link", function(event) {
		var rid = this.id;
		jQuery("#submenu_new" + rid).toggle();
	});
});


jQuery(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {
			el: this.el,
			multiple: this.multiple
		}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var jQueryel = e.data.el;
		jQuerythis = jQuery(this),
			jQuerynext = jQuerythis.next();

		jQuerynext.slideToggle();
		jQuerythis.parent().toggleClass('open');

		if (!e.data.multiple) {
			jQueryel.find('.submenu').not(jQuerynext).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion(jQuery('#accordion'), false);
});


function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+jQuery/;
	return regex.test(email);
}

function validate() {
	var error = false;
	var quantity = [];
	//checking if quantity is greater than 0
	jQuery.each(jQuery("input[name='quantity[]']"), function(index, value) {
		if (value.value.length == 0 || parseInt(value.value) <= 0) {
			jQuery("#warning").html("Please enter a valid value for quantity. Minimum Quantity: 1").css('color', 'red');
			error = true;
			return;
		}
		quantity.push(parseInt(value.value));
	});

	if (error) {
		return;
	}

	//checking if valid name is entered
	var name = jQuery("#name").val();
	if (name == '') {
		jQuery("#warning").html("Please enter a valid name.").css('color', 'red');
		jQuery("#name").addClass("input-error");
		error = true;
		return;
	}

	jQuery("#warning").html("");

	//checking if valid email is entered.
	var email = jQuery("#email").val();
	if (!isEmail(email)) {
		jQuery("#warning").html("Please enter a valid email address.").css('color', 'red');
		jQuery("#email").addClass("input-error");
		error = true;
		return;
	}

	jQuery("#warning").html(""); //reset error message

	//checking if address line 1 is entered
	var address1 = jQuery("#address1").val();
	if (address1 == '') {
		jQuery("#warning").html("Please enter a valid street address.").css('color', 'red');
		jQuery("#address1").addClass("input-error");
		error = true;
		return;
	}

	jQuery("#warning").html("");

	//checking if city is entered
	var city = jQuery("#city").val();
	if (city == '') {
		jQuery("#warning").html("Please enter a valid city.").css('color', 'red');
		jQuery("#city").addClass("input-error");
		error = true;
		return;
	}

	jQuery("#warning").html("");

	//checking if state is entered
	var state = jQuery("#state").val();
	if (state == '') {
		jQuery("#warning").html("Please enter a valid state/province.").css('color', 'red');
		jQuery("#state").addClass("input-error");
		error = true;
		return;
	}

	jQuery("#warning").html("");

	//checking if country is entered
	var country = jQuery("#country").val();
	if (country == '') {
		jQuery("#warning").html("Please enter a valid country.").css('color', 'red');
		jQuery("#country").addClass("input-error");
		error = true;
		return;
	}

	jQuery("#warning").html("");

	//checking if zip code is entered
	var zip = jQuery("#zip").val();
	if (zip == '') {
		jQuery("#warning").html("Please enter a valid zip.").css('color', 'red');
		jQuery("#zip").addClass("input-error");
		error = true;
		return;
	}

	jQuery("#warning").html("");




	var title = [];
	jQuery.each(jQuery("input[name='title[]']"), function(index, value) {
		title.push(value.value);
	});

	jQuery.post("https://sitraminc.com/wp-content/themes/sitraminc/email.php", {
			title: title,
			quantity: quantity,
			name: jQuery("#name").val(),
			email: jQuery("#email").val(),
			companyName: jQuery("#companyName").val(),
			address1: jQuery("#address1").val(),
			address2: jQuery("#address2").val(),
			city: jQuery("#city").val(),
			state: jQuery("#state").val(),
			country: jQuery("#country").val(),
			zip: jQuery("#zip").val(),
		}).done(function(response, status) {
			if (response.trim() == "Failed to send email") {
				jQuery("#warning").html("Something went wrong, please try again. If the error persist, plase contact us. Thank you").css('color', 'red');
				return;
			}

			jQuery("#warning").html("Thank you for the order. We will get back at the earliest.").css('color', 'green');
			setTimeout(function() {
				jQuery("#warning").html("");
				modal.style.display = "none";
			}, 3000);
		})
		.fail(function(jqXHR) {
			if (jqXHR.status == 500 || jqXHR.status == 0) {
				// internal server error or internet connection broke  
			}
		});


}

jQuery(".woocommerce #primary").addClass("container mt-4 pt-4");



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn7");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


jQuery(function() {
	var accordion_new = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {
			el: this.el,
			multiple: this.multiple
		}, this.dropdown)
	}

	accordion_new.prototype.dropdown = function(e) {
		var jQueryel = e.data.el;
		jQuerythis = jQuery(this),
			jQuerynext = jQuerythis.next();

		jQuerynext.slideToggle();
		jQuerythis.parent().toggleClass('open');

		if (!e.data.multiple) {
			jQueryel.find('.submenu_new').not(jQuerynext).slideUp().parent().removeClass('open');
		};
	}

	var accordion_new = new accordion_new(jQuery('#accordion_new'), false);
});
