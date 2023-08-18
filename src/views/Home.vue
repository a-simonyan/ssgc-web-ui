<template>
    <div class="card-wrapper card pt-14 pb-14 mb-20">
        <div class="card-section">
            <div class="d-flex flex-column text-primary">
                <p class="bodysmall">A SOURCE OF TRUTH</p>
                <h1 class="section-title-h1">Styleguide</h1>
            </div>
            <div class="d-flex align-items-baseline gap-20">
                <div class="d-flex flex-column gap-14">
                    <p class="description body text-muted">Our new branding means a unified aesthetic. Across our websites, software, documentation and in print, this page serves as a source of truth.</p>
                    <a href="" class="buttonoutlineddark w-button btn-hover">Contact design team</a>
                </div>
                <div class="d-flex flex-column">
                    <div v-for="(style, index) in styleList" :key="index">
                        <div class="d-flex gap-5 mb-3">
                            <img src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628ce0a2ec6b187685f8a050_ic_tick.svg" alt="">
                            <p class="body text-muted">{{ style.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section-container w-container" style="margin-bottom: 60px;">
        <div class="second-container-section">
            <h2 class="section-title-h2">Philosophy</h2>
            <h4 class="heading-4 alignleft withtoppadding">Core message</h4>
            <p class="body mt-10">
                Our core message puts technology and human excellence at the forefront, contrasting and complementing each other. Here and throughout the design and the business, the human element is put first: the wellbeing of our employees and of the clients we take care of are of the utmost importance. The technology serves a supporting role, using it to enable us to do more and to do more, more efficiently. 
                <br>
                <br>
                Our logo depicts two hands / arms in protective (above) and supportive (below) roles placed around a core, representing <em>the person</em>. 
                SSGC:&nbsp;A Software and Security Guarding Company. 
            </p>
            <div class="d-flex">
                <div class="styleguide-column">
                    <div>
                        <div class="overline overline-small overline-accent">Core message</div>
                        <h5 class="heading-5">Human excellence, supported by great technology</h5>
                    </div>
                </div>
                <div class="styleguide-column dark">
                    <img src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/630f342238a693fa651af240_logo_explanation_horz.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 79vw, (max-width: 991px) 276.71875px, 380.59375px" srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/630f342238a693fa651af240_logo_explanation_horz-p-500.png 500w, https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/630f342238a693fa651af240_logo_explanation_horz-p-800.png 800w, https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/630f342238a693fa651af240_logo_explanation_horz.png 811w" alt="">
                </div>
            </div>
            <h4 class="heading-4 alignleft withtoppadding">Brand Pillars</h4>
            <p class="body mt-10">
                Everything we do –&nbsp;that includes what we design –&nbsp;should express our brand pillars. The connection does not always have to be obvious. For example, it could be as subtle as choosing a &nbsp;modern CCTV&nbsp;camera instead of an older one; this would show that we are tech-forward and innovative. 
                <br>
                <br>
                Viewed through the lens of the core message, two of the brand pillars are technology related (performance, innovation) and two are related to humanity (social value, employer of choice). 
                <br>
            </p>
            <div class="d-flex gap-10">
                <template v-for="(pillar, index) in pillars" :key="index">
                    <Card4
                        class="w-200px"
                        :title="pillar.title"
                        :description="pillar.description"
                    ></Card4>
                </template>
            </div>
            <h4 class="heading-4 alignleft withtoppadding">Building interfaces </h4>
            <p class="body mt-10">
                SSGC user interfaces are built <em>atomically</em>. That is to say there are base units (like atoms) that are combined to create larger structures which in turn can create sections and entire pages. This allows us to easily create consistant and visually-appealing user interfaces whilst minimising &nbsp;design-time and integration complexity.
            </p>
            <div class="d-flex gap-10">
                <template v-for="(buildingInterface, index) in buildingInterfaces" :key="index">
                    <Card4
                        class="w-200px"
                        :title="buildingInterface.title"
                        :description="buildingInterface.description"
                    ></Card4>
                </template>
            </div>
        </div>

        
    </div>

    <div class="section styleguide-section" style="margin-bottom: 60px;">
        <div class="d-flex flex-column flex-center">
            <div class="styleguide-subheader-container">
                <h2 class="section-header section-title-h2">Typography</h2>
                <p class="body mt-10">Our brand font, for use in all communications and expressions of the brand, is Public Sans. It is a versatile modern type family designed by the U.S. Digital Service for legibility &amp; consistency. Like its primary inspiration (Libre Franklin), it has a friendly, but no-nonsense demeanour. The specifics weights in use can be downloaded from our 
                    <a href="https://tutandos.sharepoint.com/:f:/g/EoOIEgET23dNkQKOx8-E2e8BogiKySZnNazftkP2C-Sa3g?e=jxZ4qg">company Sharepoint here (preferred)</a>. 
                    the entire family can be downloaded from 
                    <a href="https://fonts.google.com/specimen/Public+Sans?query=public+sans" target="_blank">Google Fonts here</a>. 
                </p>
            </div>

            <div class="styleguide-column-container d-flex">
                <div class="styleguide-column d-flex flex-column">
                    <div class="styleguide-text-color-row d-flex justify-content-between">
                        <h5 class="heading-5">Text Primary</h5>
                        <h5 class="heading-5">Rich Black</h5>
                    </div>
                    <div class="styleguide-text-color-row d-flex justify-content-between">
                        <h5 class="textcolor_secondaryol heading-5 text-muted">Text Secondary</h5>
                        <h5 class="textcolor_secondaryol heading-5 text-muted">6B6B6B</h5>
                    </div>
                    <div class="styleguide-text-color-row d-flex justify-content-between">
                        <h5 class="textcolor_tertiaryol heading-5 text-muted">Text Tertiary</h5>
                        <h5 class="textcolor_tertiaryol heading-5 text-muted">878787</h5>
                    </div>
                </div>
                <div class="styleguide-column card  d-flex flex-column">
                    <div class="styleguide-text-color-row d-flex justify-content-between">
                        <h5 class="heading-5">Text Primary</h5>
                        <h5 class="heading-5">F5F5F5</h5>
                    </div>
                    <div class="styleguide-text-color-row d-flex justify-content-between">
                        <h5 class="textcolor_secondaryol heading-5 text-muted">Text Secondary</h5>
                        <h5 class="textcolor_secondaryol heading-5 text-muted">C8C8C8</h5>
                    </div>
                    <div class="styleguide-text-color-row d-flex justify-content-between">
                        <h5 class="textcolor_tertiaryol heading-5 text-muted">Text Tertiary</h5>
                        <h5 class="textcolor_tertiaryol heading-5 text-muted">979797</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section styleguide-section d-flex flex-center" style="margin-bottom: 80px;">
        <div class="colours">
            <div class="mt-6 mb-3">
                <h2 class="section-header section-title-h2">Colours</h2>
                <p class="body mt-10">We carry forward the interaction between technology &amp; humanity.&nbsp;
                    <br>
                    <br>
                    The vibrant, energetic &amp; warm oranges represent the human centered quality of the business.&nbsp; Using an orange for the logo provides uniqueness to the brand, setting it apart from its competitors. The formal, calming &amp; cool blue-greys communicate the trustworthy, reliable and well-structured values of the company. The range of tones chosen represent the modern &amp; technology-forward components of the company. <br><br>Note that even in the design, the shades of blue are placed in supporting roles (backgrounds, text) whereas the shades of orange are used in prominence (buttons, logo, links, call-out stats). Human excellence, supported by great technology.
                    <br>
                </p>
            </div>

            <div class="grid">

                <div class="styleguide-colorcontainer" v-for="(color, index) in colours" :key="index">

                    <div class="color-column" :style="{ backgroundColor: `#${ color.caption2 }` }">

                        <div class="styleguide-text-color-row textcolor_tertiaryol d-flex justify-content-between">
                            <p class="body bodycaption" :style="{ color: color.captionColor }">{{ color.caption1 }}</p>
                            <p class="body bodycaption" :style="{ color: color.captionColor }">{{ color.caption2 }}</p>
                        </div>
                        <h5 :style="{ color: color.textColor }" class="heading-5">{{ color.text }}</h5>

                    </div>

                </div>

            </div>

        </div>
    </div>

    <div class="section d-flex flex-column flex-center" style="margin-bottom: 60px;">
        <div class="components-wrapper">
            <div class="components">
                <h2 class="section-title-h2 mb-10">Components</h2>
                <div class="">
                    <h4 class="section-header heading-4-accent heading-4">Buttons</h4>
                    <p class="body section-header-body">
                        The choice of button depends on it’s importance and therefore, its desired 
                        <br>
                        emphasis.
                    </p>
                </div>
            </div>
    
            <div class="buttons-wrapper d-flex flex-column">
                
                <div class="button-type d-flex component-buttons">
                    <div>
                        <template v-for="(button, index) in buttons" :key="index">
                            <div class="d-flex flex-center button-first-section">
    
                                <Card4
                                    class="w-300px"
                                    :title="button.title"
                                    :description="button.description"
                                ></Card4>
    
                                <div>
                                    <a class="component-button btn-hover" 
                                        :style="{ 
                                            border: button.borderLight, 
                                            backgroundColor: button.btnBackgroundColorLight, 
                                            color: button.textColorLight 
                                        }">BUTTON</a>
                                </div>
                            </div>
    
                        </template>
                    </div>
    
                    <div>
                        <template  v-for="(button, index) in buttons" :key="index">
                            <div class="button-wrapper">
                                    <a class="component-button btn-hover" 
                                        :style="{ 
                                            border: button.borderDark, 
                                            backgroundColor: button.btnBackgroundColorDark, 
                                            color: button.textColorDark 
                                        }">BUTTON</a>
                                </div>
                        </template>
                    </div>
                </div>
    
                <div class=" text-elements">
                    <h4 class="section-header heading-4-accent heading-4">Text Elements</h4>
                    <p class="body mt-10">We use one font throughout the design:&nbsp;Public Sans. You can download it for free from 
                        <a href="https://fonts.google.com/specimen/Public+Sans?query=public+sans" target="_blank">Google Fonts here</a>.
                        <br>
                        <br>
                        All text is placed on either dark or light surfaces. Below are all generic text styles for both variants.
                    </p>
    
                </div>
    
                <div class="d-flex">
    
                    <div class="styleguide-column">
                        <h1 class="section-title-h1">Heading 1</h1>
                        <h2 class="section-title-h2">Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h4 class="heading-4-accent section-title-h4">Heading 4 Accent</h4>
                        <h5 class="heading-5">Heading 5</h5>
                        <h6 class="heading-6">Heading 6</h6>
                        <div class="overline overline-accent mb-4">Overline Accent</div>
                        <div class="overline text-muted mb-4">Overline</div>
                        <p class="bodylarge">Body Large</p>
                        <p class="body">Body Medium</p>
                        <p class="bodysmall">Body Small</p>
                        <p class="caption">Caption</p>
                    </div>
    
                    <div class="styleguide-column dark">
                        <h1 class="section-title-h1">Heading 1</h1>
                        <h2 class="section-title-h2">Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h4 class="heading-4-accent section-title-h4">Heading 4 Accent</h4>
                        <h5 class="heading-5">Heading 5</h5>
                        <h6 class="heading-6">Heading 6</h6>
                        <div class="overline overline-accent overline-accent-dark mb-4">Overline Accent</div>
                        <div class="overline text-muted mb-4">Overline</div>
                        <p class="bodylarge text-muted">Body Large</p>
                        <p class="body text-muted">Body Medium</p>
                        <p class="bodysmall text-muted">Body Small</p>
                        <p class="caption text-muted">Caption</p>
                    </div>
    
                </div>

                <div class="texts">
                    <p class="body bodylarge">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.</p>
                    <p class="body text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <p class="bodysmall text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <p class="caption text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
    
                <div class="">
                    <h4 class="section-header heading-4-accent heading-4">Text Fields &amp;&nbsp;Forms</h4>
                    <p class="body section-header-body">Text fields allow users to enter text into a UI. They typically appear in forms and <br> dialogs. Our text fields clearly indicate when they are being hovered and focussed.</p>
                </div>
    
                <div class="d-flex">
    
                    <div class="styleguide-column">
                        <form 
                            class="d-flex flex-column"
                            id="wf-form-Styleguide-form-light" 
                            name="wf-form-Styleguide-form-light" 
                            data-name="Styleguide-form-light" 
                            method="get" 
                            data-wf-page-id="62b3417971d68b3c7d520f0e" 
                            data-wf-element-id="784844e7-875a-a820-3bb3-4d4c77596bde" 
                            aria-label="Styleguide-form-light">
                            <label for="name" class="field-label">Field Label</label>
                            <input type="text" class="text-field w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name">
                            <label for="email" class="field-label">Email Address</label>
                            <input type="email" class="text-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Enter your email address" id="email">
                            <input type="submit" value="Submit" data-wait="Please wait..." class="buttonfilled w-button mt-4 btn-hover">
                        </form>
                    </div>
    
                    <div class="styleguide-column dark">
                        <form
                            class="d-flex flex-column" 
                            id="wf-form-Styleguide-form-light" 
                            name="wf-form-Styleguide-form-light" 
                            data-name="Styleguide-form-light" 
                            method="get" 
                            data-wf-page-id="62b3417971d68b3c7d520f0e" 
                            data-wf-element-id="784844e7-875a-a820-3bb3-4d4c77596bde" 
                            aria-label="Styleguide-form-light">
                            <label for="name" class="field-label field-label-dark">Field Label</label>
                            <input type="text" class="text-field text-field-dark w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name">
                            <label for="email" class="field-label field-label-dark">Email Address</label>
                            <input type="email" class="text-field text-field-dark w-input" maxlength="256" name="email" data-name="Email" placeholder="Enter your email address" id="email">
                            <input type="submit" value="Submit" data-wait="Please wait..." class="buttonfilled buttonfilled-dark w-button mt-4 btn-hover">
                        </form>
                    </div>
                    
                </div>
                
                
            </div>
        </div>

    </div>

    <div class="section styleguide-section d-flex flex-column align-items-center" style="margin-bottom: 60px;">
        <div class="imagery">

            <h2 class="section-title-h2">Imagery</h2>

            <p class="body mt-10">Picking the perfect image is a skill that comes with time, though there are some tips you can use to whittle down the possible options. </p>

            <div class="mb-10">

                <h5 class="heading-5 withextrapadding">1. Consider colours and clarity</h5>

                <p class="body mt-10">Should you be in a position of choice –&nbsp;where you do not need a <em>specific</em> image but rather just "an image", consider picking one with a similar color profile as the rest of the branding; at a basic level, this means there are colours and tones similar to those in the Colours section above. Further, high-quality, visually sleek and 
                    <br>
                    <br>
                    This gives off a more put together and cohesive visual rather than just something we stuck our logo on. 
                </p>

                <div class="d-flex flex-row gap-2">

                    
                    <div class="col_half">
                        <img 
                            src="../../public/media/products/Imagery1.png" 
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 359px, 465px" 
                            srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/631608f50eff22a8ee18a1c5_img_sg_image_content_dont-p-500.png 500w, 
                            https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/631608f50eff22a8ee18a1c5_img_sg_image_content_dont-p-800.png 800w, 
                            https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/631608f50eff22a8ee18a1c5_img_sg_image_content_dont.png 829w" 
                            alt="" 
                            class="styleguide-image"
                        >
                        <div class="styleguide-image-statusbar cc-dont">
                            <div class="styleguide-image-statustext">Don't</div>
                            <p class="bodycaption text-muted">Use unclear images or those that don't mirror the sleek, modern look of SSGC. In this case, it is faded and has an unclear message.</p>
                        </div>
                    </div>


                    <div class="col_half">
                        <img 
                            src="../../public/media/products/Imagery1.png" 
                            loading="lazy" 
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 359px, 465px" 
                            srcset="
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/631608ffede28c45ec6b9697_img_sg_image_content_do-p-500.png 500w, 
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/631608ffede28c45ec6b9697_img_sg_image_content_do-p-800.png 800w, 
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/631608ffede28c45ec6b9697_img_sg_image_content_do.png 829w" 
                            alt="" 
                            class="styleguide-image"
                        >
                        <div class="styleguide-image-statusbar">
                            <div class="styleguide-image-statustext">Do</div>
                            <p class="bodycaption text-muted">
                                Pick clear images with on brand colouring (if possible). Here a modern CCTV&nbsp;camera is chosen to reflect the Innovation brand pillar.
                            </p>
                        </div>
                    </div>

                </div>

            </div>


            <div class="mb-10">

                <h5 class="heading-5 withextrapadding">2. Content backgrounds</h5>

                <p class="body mt-10">
                    Often, if you are adding something on top of an image, adding a background is a good idea. This ensures the content you add is legible and confirms to accessibility standards. This is the case even when just the logo is added. The standard here is to use either a DARK&nbsp;or LIGHT&nbsp;background (defined below) with conforming content styles (e.g. light or dark text elements). 
                    <br>
                    <strong>
                        <br>DARK background:
                    </strong>&nbsp;RichBlack (Surface Dark)&nbsp;@&nbsp;85% with a 10px background blur
                    <br>
                    <strong>LIGHT background:&nbsp;</strong>
                    BgLight 2:&nbsp;Alpine (Surface Alt) @&nbsp;85% with a 10px background blur
                </p>

                <div class="d-flex flex-row gap-2">

                    
                    <div class="col_half">
                        <img 
                            src="../../public/media/products/Imagery1.png" 
                            loading="lazy" 
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 359px, 465px" 
                            srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160e036a2fa1ffd878fd44_img_sg_background_dont-p-500.png 500w, 
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160e036a2fa1ffd878fd44_img_sg_background_dont-p-800.png 800w, 
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160e036a2fa1ffd878fd44_img_sg_background_dont.png 829w" 
                            alt="" 
                            class="styleguide-image"
                        >
                        <div class="styleguide-image-statusbar cc-dont">
                            <div class="styleguide-image-statustext">Don't</div>
                            <p class="bodycaption text-muted">Don't add text above an image if the background isn't a clear light / dark. </p>
                        </div>
                    </div>


                    <div class="col_half">
                        <img 
                            src="../../public/media/products/Imagery1.png" 
                            loading="lazy" 
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 359px, 465px" 
                            srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160e0dab6ed9c76c5ee57f_img_sg_background_do-p-500.png 500w, 
                            https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160e0dab6ed9c76c5ee57f_img_sg_background_do-p-800.png 800w, 
                            https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160e0dab6ed9c76c5ee57f_img_sg_background_do.png 829w" 
                            alt="" 
                            class="styleguide-image"
                        >
                        <div class="styleguide-image-statusbar">
                            <div class="styleguide-image-statustext">Do</div>
                            <p class="bodycaption text-muted">
                                Add blurred background containers around content to add structure and clarity.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div class="mb-10">

                <h5 class="heading-5 withextrapadding">3. Make sure you use the correct logo</h5>

                <p class="body mt-10">
                    There are two colour variants of the logo. One is meant for use on light backgrounds and the other is for use on dark background. See more in the Logo section below.
                </p>

                <div class="d-flex flex-row gap-2">

                    
                    <div class="col_half">
                        <img 
                            src="../../public/media/products/Imagery1.png" 
                            loading="lazy" 
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 359px, 465px" 
                            srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160fe23c13ed3682fbd29e_img_sg_logo_dont-p-500.png 500w, 
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160fe23c13ed3682fbd29e_img_sg_logo_dont-p-800.png 800w, 
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160fe23c13ed3682fbd29e_img_sg_logo_dont.png 829w" 
                            alt="" 
                            class="styleguide-image"
                        >
                        <div class="styleguide-image-statusbar cc-dont">
                            <div class="styleguide-image-statustext">Don't</div>
                            <p class="bodycaption text-muted">Using the higher saturation variant of the logo on a dark background looks heavy and can fail accessibility standards. Refrain from doing this.</p>
                        </div>
                    </div>


                    <div class="col_half">
                        <img 
                            src="../../public/media/products/Imagery1.png" 
                            loading="lazy" 
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 359px, 465px" 
                            srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160fe23c13ed3682fbd29e_img_sg_logo_dont-p-500.png 500w, 
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160fe23c13ed3682fbd29e_img_sg_logo_dont-p-800.png 800w, 
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/63160fe23c13ed3682fbd29e_img_sg_logo_dont.png 829w" 
                            alt="" 
                            class="styleguide-image"
                        >
                        <div class="styleguide-image-statusbar">
                            <div class="styleguide-image-statustext">Do</div>
                            <p class="bodycaption text-muted">
                                Use the desaturated version of the logo on dark backgrounds. With better contrast, the entire composition looks more balanced and visually appealing.
                            </p>
                        </div>
                    </div>

                </div>

            </div>


            <div class="mb-10">

                <h5 class="heading-5 withextrapadding">4. Applying atomic principles</h5>

                <p class="body mt-10">
                    As well as the Colours (above), the Elements, the Components (above) and Structures (below) you see on this page can and indeed, should, be used on any imagery or graphics created where applicable.
                </p>

                <div class="d-flex flex-row gap-2">

                    
                    <div class="col_half">
                        <img 
                            src="../../public/media/products/Imagery1.png" 
                            loading="lazy" 
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 359px, 465px" 
                            srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/631611295d49d864d6573340_img_sg_atomic_dont-p-500.png 500w, 
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/631611295d49d864d6573340_img_sg_atomic_dont-p-800.png 800w, 
                                https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/631611295d49d864d6573340_img_sg_atomic_dont.png 829w" 
                            alt="" 
                            class="styleguide-image"
                        >
                        <div class="styleguide-image-statusbar cc-dont">
                            <div class="styleguide-image-statustext">Don't</div>
                            <p class="bodycaption text-muted">Don't create new visuals for something that is already well defined. In this case, the ticked bullet points should use the ticks defined in the "Bullet Points" section below. Further, the copy used here refers more to statistics, in which case, the "Stand-out Stats" structure (below) should be used.</p>
                        </div>
                    </div>


                    <div class="col_half">
                        <img 
                            src="
                                ../../public/media/products/Imagery1.png" 
                                loading="lazy" 
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 359px, 465px" 
                                srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6316114c6a2fa10e26792324_img_sg_atomic_do-p-500.png 500w, 
                                        https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6316114c6a2fa10e26792324_img_sg_atomic_do-p-800.png 800w, 
                                        https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6316114c6a2fa10e26792324_img_sg_atomic_do.png 829w" 
                            alt="" 
                            class="styleguide-image"
                        >
                        <div class="styleguide-image-statusbar">
                            <div class="styleguide-image-statustext">Do</div>
                            <p class="bodycaption text-muted">
                                Use elements (here, logo in the background), components and structures (here, Stand-out Stats) where applicable.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>

    <div class="section styleguide-section d-flex flex-center" style="margin-bottom: 60px;">
        <div class="section-container w-container d-flex flex-column structures">
            <h2 class="section-title-h2 mb-10">Structures</h2>
            <div class="">
                <h4 class="section-header heading-4-accent heading-4">Bullet Points</h4>
                <p class="body mt-10 mb-10">As well we bullet points in text, custom bullet point lists can be used to draw attention to a set of important ideas. There are two custom bullet styles:&nbsp;one used for distinct benefits or included features / content and the other is a generic bullet, taking inspiration from our logo.</p>
            </div>
            <div class="row">
                <div class="styleguide-column">
                    <h5 class="section-header heading-5">Benefits</h5>
                    <div class="bullet-wrap d-flex gap-4 mb-2">
                        <img 
                            src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628ce0a2ec6b187685f8a050_ic_tick.svg" 
                            loading="lazy" 
                            width="20" 
                            height="20" 
                            alt=""
                        >
                        <div class="body bullet-text">Easy to use</div>
                    </div>
                    <div class="bullet-wrap d-flex gap-4 mb-2">
                        <img 
                            src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628ce0a2ec6b187685f8a050_ic_tick.svg" 
                            loading="lazy" 
                            width="20" 
                            height="20" 
                            alt=""
                        >
                        <div class="body bullet-text">Fastest in the field</div>
                    </div>
                        <div class="bullet-wrap d-flex gap-4 mb-2">
                            <img 
                                src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628ce0a2ec6b187685f8a050_ic_tick.svg" 
                                loading="lazy" 
                                width="20" 
                                height="20" 
                                alt=""
                            >
                            <div class="body bullet-text">23% annual cost saving compared to alternative options such as one that has a lot of writing</div>
                        </div>
                    </div>
                    <div class="styleguide-column dark">
                        <h5 class="section-header heading-5 heading-5-dark">Benefits</h5>
                        <div class="bullet-wrap d-flex gap-4 mb-2">
                            <img 
                            src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628ce0a2ec6b187685f8a050_ic_tick.svg" 
                            loading="lazy" 
                            width="20" 
                            height="20" 
                            alt=""
                        >
                        <div class="body text-muted ">Easy to use</div>
                    </div>
                    <div class="bullet-wrap d-flex gap-4 mb-2">
                        <img 
                        src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628ce0a2ec6b187685f8a050_ic_tick.svg" 
                        loading="lazy" 
                        width="20" 
                        height="20" 
                        alt=""
                    >
                        <div class="body text-muted ">Fastest in the field</div>
                    </div>
                    <div class="bullet-wrap d-flex gap-4 mb-2">
                        <img 
                        src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628ce0a2ec6b187685f8a050_ic_tick.svg" 
                        loading="lazy" 
                        width="20" 
                        height="20" 
                        alt=""
                    >
                    <div class="body text-muted ">23% annual cost saving compared to alternative options such as one that has a lot of writing</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="styleguide-column">
                <a data-w-id="61161d7d-6918-54c1-bbd9-0c504a27604c" href="#" class="bullet-wrap d-flex gap-4 mb-2">
                    <img 
                    src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628f42196736c7d3af0623f5_ic_bullet.svg" 
                    loading="lazy" 
                    width="20" 
                    height="20" 
                    alt="" 
                    class="bullet-image" 
                    style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); 
                        transform-style: preserve-3d; filter: brightness(100%);">
                        <div class="body text-dark">Performance through Partnership</div>
                </a>
                <a data-w-id="61161d7d-6918-54c1-bbd9-0c504a27604c" href="#" class="bullet-wrap d-flex gap-4 mb-2">
                    <img 
                    src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628f42196736c7d3af0623f5_ic_bullet.svg" 
                    loading="lazy" 
                    width="20" 
                    height="20" 
                    alt="" 
                    class="bullet-image" 
                    style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); 
                    transform-style: preserve-3d; filter: brightness(100%);">
                    <div class="body text-dark">Social Value</div>
                </a>
                <a data-w-id="61161d7d-6918-54c1-bbd9-0c504a27604c" href="#" class="bullet-wrap d-flex gap-4 mb-2">
                    <img src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628f42196736c7d3af0623f5_ic_bullet.svg" 
                    loading="lazy" 
                    width="20" 
                    height="20" 
                    alt="" 
                    class="bullet-image" 
                    style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); 
                    transform-style: preserve-3d; filter: brightness(100%);">
                    <div class="body text-dark">Innovation</div>
                </a>
                <a data-w-id="61161d7d-6918-54c1-bbd9-0c504a27604c" href="#" class="bullet-wrap d-flex gap-4 mb-2">
                    <img 
                    src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628f42196736c7d3af0623f5_ic_bullet.svg" 
                    loading="lazy" 
                    width="20" 
                    height="20" 
                    alt="" 
                    class="bullet-image" 
                    style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); 
                    transform-style: preserve-3d; filter: brightness(100%);">
                    <div class="body text-dark">Though the last pillar is in fact being an “Employer of Choice”. I write more here to demonstrate how longer text looks in this bullet style.</div>
                </a>
            </div>
            <div class="styleguide-column dark">
                <div class="bullet-wrap d-flex gap-4 mb-2">
                    <img 
                    src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628f42196736c7d3af0623f5_ic_bullet.svg" 
                    loading="lazy" 
                    width="20" 
                    height="20" 
                    alt="" 
                    class="bullet-image">
                    <div class="body text-muted ">Performance through Partnership<br></div>
                </div>
                <div class="bullet-wrap d-flex gap-4 mb-2">
                    <img 
                    src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628f42196736c7d3af0623f5_ic_bullet.svg" 
                    loading="lazy"
                     width="20" 
                    height="20" 
                    alt="" 
                    class="bullet-image">
                    <div class="body text-muted ">Social Value</div>
                </div>
                <div class="bullet-wrap d-flex gap-4 mb-2">
                    <img 
                    src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628f42196736c7d3af0623f5_ic_bullet.svg" 
                    loading="lazy" 
                    width="20" 
                    height="20" 
                    alt="" 
                    class="bullet-image">
                    <div class="body text-muted ">Innovation</div>
                </div>
                <div class="bullet-wrap d-flex gap-4 mb-2">
                    <img 
                    src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/628f42196736c7d3af0623f5_ic_bullet.svg" 
                    loading="lazy" 
                    width="20" 
                    height="20" 
                    alt="" 
                    class="bullet-image">
                    <div class="body text-muted ">Though the last pillar is in fact being an “Employer of Choice”. I write more here to demonstrate how longer text looks in this bullet style.</div>
                </div>
            </div>
        </div>
        <div class="styleguide-subheader-container mt-5">
            <h4 class="section-header heading-4-accent heading-4">Stand-out Stats</h4>
            <p class="body mt-10 text">When we want to highlight a figure, we can use this structure. It places the figure at the forefront in a rather graphic fashion. It can be accompanied with an arrow (green point up or red pointing down) to illustrate change.</p></div>
            <div class="row">
                <div class="styleguide-column d-flex flex-center">
                    <div class="statisticcontainer">
                        <div class="d-flex gap-2 ">
                            <img 
                            src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62175d4a9792ba48d011d39c_ic_arrow_up.svg" 
                            loading="lazy" 
                            alt="" 
                            class="statisticnumberindicator">
                            <div class="fs-1 stand-out-stats stand-out-stats-first">128</div>
                        </div>
                        <p class="statisticcaption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
                <div class="styleguide-column dark d-flex flex-center">
                    <div class="statisticcontainer" style="margin-left: 60px;">
                        <div class="d-flex gap-2 ">
                            <img 
                            src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62175d4a9792ba48d011d39c_ic_arrow_up.svg" 
                            loading="lazy" 
                            width="20" 
                            alt="" 
                            class="statisticnumberindicator">
                        <div class="fs-1 stand-out-stats stand-out-stats-second">0%</div>
                    </div>
                    <div class="text-muted statisticcaption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
            </div>
        </div>
    </div>

    </div>

    <div class="section d-flex flex-column flex-center" style="margin-bottom: 80px;">

        <div class="sections">

            <h2 class="section-title-h2 mb-10">Sections</h2>

            <h4 class="section-header heading-4-accent heading-4">Feature:&nbsp;Image &amp;&nbsp;Text (horizontal)</h4>

            <p class="body section-header-body">This has two variants allowing for alternating composition.</p>

            <div class="d-flex flex-column gap-10">

                <div class="d-flex gap-8">
                    <img 
                        src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6216775449f9767ee21ad886_fake_screen.png" 
                        loading="lazy" 
                        alt="" 
                        sizes="(max-width: 767px) 48vw, (max-width: 991px) 349.4375px, 451.1875px" 
                        srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6216775449f9767ee21ad886_fake_screen-p-500.png 500w, 
                        https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6216775449f9767ee21ad886_fake_screen-p-800.png 800w, 
                        https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6216775449f9767ee21ad886_fake_screen.png 865w" 
                        class="featureimage w-650px"
                    >
                    <Card1
                        class="w-650px d-flex"
                        :title="'Heading'"
                        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'"
                        :isReadMore="true"
                    ></Card1>
                </div>
    
                <div class="d-flex gap-8">
                    <Card1
                        class="w-650px d-flex"
                        :title="'Heading'"
                        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'"
                        :isReadMore="true"
                    ></Card1>
                    <img 
                        src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6216775449f9767ee21ad886_fake_screen.png" 
                        loading="lazy" 
                        alt="" 
                        sizes="(max-width: 767px) 48vw, (max-width: 991px) 349.4375px, 451.1875px" 
                        srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6216775449f9767ee21ad886_fake_screen-p-500.png 500w, 
                        https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6216775449f9767ee21ad886_fake_screen-p-800.png 800w, 
                        https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/6216775449f9767ee21ad886_fake_screen.png 865w" 
                        class="featureimage w-650px"
                    >
                </div>
            </div>


        </div>
    </div>

    <div class="section d-flex flex-column flex-center" style="margin-bottom: 60px;">

        <div class="sections">

            <h4 class="section-header heading-4-accent heading-4">Item:  Image & Text (vertical)</h4>

            <p class="body section-header-body">There are many combinations of base components to create something like the <br>
                “Image&Text(Vertical)” item. Here are three examples demonstrated throughout the <br>
                site.
            </p>

            <div class="d-flex">

                <div class="d-flex gap-10">
                    <template v-for="(socialValue, index) in socialValues" :key="index">
                        <div class="d-flex flex-column gap-6 flex-between w-100%">
                            <img class="h-200px" style="object-fit: cover;" :src="getAssetPath(socialValue.src)" alt="">
                            <Card1
                                class="w-300px"
                                :title="socialValue.title"
                                :description="socialValue.description"
                                :isReadMore="socialValue.isReadMore"
                            ></Card1>
                        </div>
                    </template>
                </div>
            </div>


        </div>
    </div>

    <div class="section d-flex flex-column flex-center" style="margin-bottom: 60px;">
        <div class="sections">
            <h2 class="section-title-h2">Logo</h2>

            <p class="body mt-10">
                Depending on its context,&nbsp;surroundings and size, the&nbsp;company logo can be scaled to&nbsp;provide more or less information.&nbsp;
                <br>
                ‍<br>
                Usage of the larger variants should be&nbsp;done with care. If a variant made to be larger is&nbsp;scaled down, the text becomes unreadable and&nbsp;makes the brand seem unaccessible.
                <br>‍
                <br>Conversely, though smaller variants can be scaled up, the&nbsp;context they are placed in can sometimes benefit from additional information. For example, press related representations should include the logotype and proposal documents could include the full version.
                <br>
            </p>

            <div class="d-flex flex-column align-items-center gap-17 mt-10 mb-20">
                <div v-for="(logo, index) in logos" :key="index" class="d-flex gap-6">
                    <template v-for="(singleLogo, index) in logo" :key="index">
                        <img :src="singleLogo" alt="" loading="lazy" height="65">
                    </template>
                </div>
            </div>

            <p class="body withtopspacing">There are two color variants of the logo. The above uses our primary accent color:&nbsp;Orange. 
                <br>
                <br>
                To better suit darker backgrounds, we use a modified, &nbsp;desaturated orange in keeping with 
                <a 
                    href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" 
                    target="_blank">guidance from WCAG
                </a>. The desaturated orange is:&nbsp;
                <span class="text-span">Tiger (#E47D38)</span>.
                <br>
            </p>

            <div class="d-flex flex-column gap-3">
                
                <div class="d-flex gap-3">
                    <div class="col_half bgcolor_black styleguide-column centrecol">
                        <img 
                            src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62ac745757a0ff4acc10b2ec_logo_type_ondark.svg" 
                            loading="lazy" 
                            alt="" 
                            class="styleguidelogo"
                            width="350"
                        >
                    </div>

                    <div class="col_half bgcolor_richblack styleguide-column centrecol">
                        <img 
                            src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62ac745757a0ff4acc10b2ec_logo_type_ondark.svg" 
                            loading="lazy" 
                            alt="" 
                            class="styleguidelogo"
                            width="350"
                        >
                    </div>
                </div>

                <div class="d-flex ">
                    <div class="col_full bgcolor_richblack styleguide-column centre last-logo">
                        <img 
                            src="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62de4c914d21ac528f3a26b5_logo_type_subline_ondark.png" 
                            loading="lazy" 
                            srcset="https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62de4c914d21ac528f3a26b5_logo_type_subline_ondark-p-500.png 500w, 
                                    https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62de4c914d21ac528f3a26b5_logo_type_subline_ondark-p-800.png 800w, 
                                    https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62de4c914d21ac528f3a26b5_logo_type_subline_ondark-p-1080.png 1080w, 
                                    https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62de4c914d21ac528f3a26b5_logo_type_subline_ondark-p-1600.png 1600w, 
                                    https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62de4c914d21ac528f3a26b5_logo_type_subline_ondark-p-2000.png 2000w, 
                                    https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62de4c914d21ac528f3a26b5_logo_type_subline_ondark-p-2600.png 2600w, 
                                    https://uploads-ssl.webflow.com/609cf3f6efc015e88e460fe3/62de4c914d21ac528f3a26b5_logo_type_subline_ondark-p-3200.png 3200w" 
                        sizes="(max-width: 479px) 100vw, 300px" alt="" 
                        class="styleguidelogo"
                        width="645">
                    </div>
                </div>


            </div>
            
        </div>
    </div>

    <!-- <h1 class="section-title-h1" style="margin-left: 27vh;">What we provide</h1>
    <div class="d-flex flex-center align-items-baseline gap-5 p-0 mt-10">
        <Card1
            class="w-550px"
            title="Our focus on technology ensures that we can recruit the right person faster than our competitors without comprising on compliance"
            description="We provide security guarding services with our bespoke technology and highly-skilled staff. Upheld by our four pillars – innovation, social value, performance through partnerships and being an employer of choice – we meet the security needs of our customers with integrated solutions that are unmatched across the UK’s security sector."
            :isReadMore="false"
            :isHeader="false"
        ></Card1>
        <ul>
            <li class="fs-5 text-muted nav-item">Security guarding</li>
            <li class="fs-5 text-muted nav-item">Automated Recruitment system</li>
            <li class="fs-5 text-muted nav-item">Automated Ops Management System</li>
            <li class="fs-5 text-muted nav-item">Online e-learning academy</li>
        </ul>
    </div>
    
    <div class="d-flex gap-20 flex-center p-0 mt-20">
        <Card1
            class="w-450px"
            title="The UK’s fastest growing security guarding company"
            description="We were formed from a management buy out in 2014 at which point our turnover was £1.5M. In 2021, we grew by 1,400 per cent – to £102M – earning us the title of the UK’s fastest growing security guarding company."
            :isReadMore="true"
            :isHeader="true"
        ></Card1>
        <img src="../../public/media/avatars/300-3.jpg" alt="">
    </div>
    
    <div class="d-flex gap-20 flex-center p-0">
        <img src="../../public/media/avatars/300-3.jpg" alt="">
        <Card1
            class="w-450px"
            title="Supporting the Yorkshire Regiment"
            description="“The response was overwhelming. For our veterans, this is an opportunity to give something back to their communities…”"
            :isReadMore="true"
            :isHeader="true"
        ></Card1>
    </div>
    
    <div class="d-flex flex-center mt-20">
        <div class="card">
            <div class="card-body d-flex flex-start flex-column mt-5">

                <h1 class="section-title-h1">Our Brand Pillars</h1>
                <p class="w-600px text-muted">We have a suite of technology supporting our people throughout the process. From the moment they sign up, throughout recruitment and vetting and on to post-deployment.</p>
            
                <div class="d-flex gap-10">
                    <template v-for="(pillar, index) in pillars" :key="index">
                        <Card4
                            class="w-200px"
                            :icon="pillar.icon"
                            :title="pillar.title"
                            :description="pillar.description"
                            :color="pillar.color"
                        ></Card4>
                    </template>
                </div>
            </div>
        </div>
    </div>

    <div class="d-flex flex-column flex-center mt-20">
        <h1 class="section-title-h1" class="mw-450px text-center">We’ve come a long way, but we’re not done yet</h1>
        <p class="w-550px text-center">We are THE fastest growing security company in the UK, growing from £1.5m annual turnover in 2014 to £104m last year. Infologue lists us as 10th in size with a special mention for our meteoric rise</p>
    </div>

    <div class="d-flex flex-center mt-20">
        <div class="card">
            <div class="card-body d-flex flex-start flex-column mt-5">
                <h1 class="section-title-h1">Demonstrating social value in the community</h1>
                <p class="w-600px text-muted">SSGC has adopted social value principles in line with the government’s social value model. We prioritise the value we bring to society and communities we interact with.</p>
            
                <div class="d-flex gap-10">
                    <template v-for="(socialValue, index) in socialValues" :key="index">
                        <div class="d-flex flex-column gap-6">
                            <img class="h-200px" :src="getAssetPath(socialValue.src)" alt="">
                            <Card1
                                class="w-300px"
                                :title="socialValue.title"
                                :description="socialValue.description"
                                :isReadMore="true"
                            ></Card1>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>

    <div class="d-flex flex-column">
        <div class="d-flex flex-column flex-center mt-20 mb-5 gap-3">
            <h1 class="section-title-h1" class="mw-400px text-center">Our suite of bespoke technology puts us miles ahead of the competition</h1>
            <p class="w-550px text-center">We wrap our technology and applications around people to deliver the best security guarding service in the UK</p>
        </div>
        <div class="d-flex flex-column gap-5">

            <template v-for="(competition, index) in competitions" :key="index">
                <div class="d-flex flex-center gap-10">
                    <img class="w-450px h-300px" src="../../public/media/stock/600x600/img-12.jpg" alt="">
                    <Card3
                        :initials=competition.initials
                        :name=competition.name
                        :position=competition.position
                        :icon=competition.icon
                        :buttonText1=competition.buttonText1
                        :buttonText2=competition.buttonText2
                    ></Card3>
                </div>
            </template>
        </div>
    </div>

    <div class="d-flex flex-center mt-20">
        <div class="card">
            <div class="card-body d-flex flex-start flex-column mt-5">
                <div class="symbol symbol-circle symbol-45px ms-2">
                    <template v-for="(avatar, index) in avatars" :key="index">
                        <img 
                            :src="getAssetPath(avatar)"
                            :style="{ 
                                'position': 'relative', 
                                'z-index': avatars.length - (index + 1),
                                'margin-left': -9 + 'px' 
                            }" 
                            alt="img" 
                        />
                    </template>
                </div>
                <h1 class="section-title-h1">Interested in working with us? </h1>
            
                <div class="d-flex gap-10">
                    <template v-for="(partnerAndStaff, index) in partnersAndStaff" :key="index">
                        <Card3
                            class="w-450px"
                            :name=partnerAndStaff.name
                            :position=partnerAndStaff.position
                            :buttonText1=partnerAndStaff.buttonText1
                            :buttonText2=partnerAndStaff.buttonText2
                        ></Card3>
                    </template>
                </div>
            </div>
        </div>
    </div> -->


</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAssetPath } from "@/core/helpers/assets";
import KTModalCard from "@/components/cards/Card.vue";
import Card1 from "@/components/cards/Card1.vue";
import Card2 from "@/components/cards/Card2.vue";
import Card3 from "@/components/cards/Card3.vue";
import Card4 from "@/components/cards/Card4.vue";

export default defineComponent({
    name: "HomeComponent",
    setup() {
        return {
        getAssetPath,
        };
    },
    data() {
    return {
      logos: [
        ['media/logos/logo.svg'],
        ['media/logos/logo-type.svg'],
        ['media/logos/header-logo.svg'],
        ['media/logos/logo-type.svg', 'media/logos/logo-type.svg', 'media/logos/logo-type.svg'],
      ],

      buttons: [
        {
            title: 'High Emphasis',
            description: 'For the primary, most important, or most common action on a screen',
            borderLight: 'none',
            btnBackgroundColorLight: '#e96000',
            textColorLight: '#fff',
            borderDark: 'none',
            btnBackgroundColorDark: '#fda76d',
            textColorDark: '#1f2636',
        },
        {
            title: 'Medium Emphasis',
            description: 'For important actions that don’t distract from other onscreen elements',
            borderLight: '2px solid #e96000',
            btnBackgroundColorLight: '#ffffff',
            textColorLight: '#e96000',
            borderDark: '2px solid #fda76d',
            btnBackgroundColorDark: 'none',
            textColorDark: '#fda76d',
        },
        {
            title: 'Low Emphasis',
            description: 'For optional or supplementary actions with the least amount of prominence',
            borderLight: 'none',
            btnBackgroundColorLight: 'none',
            textColorLight: '#e96000',
            borderDark: 'none',
            btnBackgroundColorDark: 'none',
            textColorDark: '#fda76d',
        }
      ],


      colours: [
        {
            caption1: 'BgLight 1: White',
            caption2: 'FFFFFF',
            captionColor: '#878787',
            text: 'Surface',
            textColor: '#0d1423'
        },
        {
            caption1: 'BgLight 2 Alpine',
            caption2: 'F4F6F9',
            captionColor: '#878787',
            text: 'Surface Alt',
            textColor: '#0d1423'
        },
        {
            caption1: 'Rich Black',
            caption2: '0D1423',
            captionColor: '#878787',
            text: 'Surface Dark',
            textColor: '#F5F5F5'
        },
        {
            caption1: 'Sand',
            caption2: 'FDA76D',
            captionColor: '#0d1423',
            text: 'Accent Light',
            textColor: '#0d1423'
        },
        {
            caption1: 'Orange',
            caption2: 'E96000',
            captionColor: '#eaecf0',
            text: 'Accent',
            textColor: '#F5F5F5'
        },
        {
            caption1: 'Mahogany',
            caption2: 'B64900',
            captionColor: '#F5F5F5',
            text: 'Accent Dark',
            textColor: '#eaecf0'
        },
        {
            caption1: 'Independence',
            caption2: '33415C',
            captionColor: '#878787',
            text: 'Support',
            textColor: '#F5F5F5'
        },
        {
            caption1: 'Gunmetal',
            caption2: '1F2636',
            captionColor: '#878787',
            text: 'Support',
            textColor: '#F5F5F5'
        },
        {
            caption1: 'Rich Black',
            caption2: '0D1423',
            captionColor: '#878787',
            text: 'Support',
            textColor: '#F5F5F5'
        }
      ],

      styleList: [
        {
            description: 'Typography',
            icon: 'check-circle'
        },
        {
            description: 'Color Palette',
            icon: 'check-circle'
        },
        {
            description: 'Logo Usage',
            icon: 'check-circle'
        },
        {
            description: 'Iconography',
            icon: 'check-circle'
        },
        {
            description: 'Imagery & Graphics',
            icon: 'check-circle'
        }
      ],
      pillars: [
        {
          title: 'Performance though partnership',
          description: 'Exponential growth in the best-performing UK security business',
        },
        {
          title: 'Social Value',
          description: 'Tackling challenges such as COVID-19 recovery and socio-economic inequality',
        },
        {
          title: 'Innovation',
          description: 'Bespoke tech providing industry-leading automation and workflow visibility',
        },
        {
          title: 'Employer of Choice',
          description: 'Investment in software and training programmes for all to develop professionally',
        }
      ],
      buildingInterfaces: [
        {
          title: 'Components',
          description: 'Analagous to the atom. Small, contained building blocks. E.g. a button.',
        },
        {
          title: 'Structures',
          description: 'Analagous to the molecule. A collection of atoms, bound together. E.g. an image with descriptive text.',
        },
        {
          title: 'Sections',
          description: 'A combination of structures and components to create an entire block of content. E.g. a selection of 3 blog posts.',
        },
        {
          title: 'Pages/Templates',
          description: 'Though not something we can show on this page, the final order',
        }
      ],
      socialValues: [
        {
          title: 'Heading',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          src: 'media/avatars/300-1.jpg',
          isReadMore: true
        },
        {
          title: 'Heading',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          src: 'media/avatars/300-15.jpg',
          isReadMore: false
        },
        {
          title: 'Heading',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          src: 'media/avatars/300-17.jpg',
          isReadMore: true
        }
      ],
      competitions: [
        {
            initials: 'PRE-DEPLOYMENT',
            name: 'Resourcer',
            position: 'A bespoke software solution that visualises and manages the administration associated with recruitment; advert management, automated vetting and managing the interviewing process from start to finish are done easily and efficiently, whilst ensuring compliance to BS7858',
            icon: 'design',
            buttonText1: 'GET A DEMO',
            buttonText2: 'LEARN MORE'
        },
        {
            initials: 'POST-DEPLOYMENT',
            name: 'Iris',
            position: 'A finalist in the Innovation of the Year award (SEA 2019), Iris allows for effective operations management from automated scheduling, visualisation of resources and app-based quality reviews',
            icon: 'design-mask',
            buttonText1: 'GET A DEMO',
            buttonText2: 'LEARN MORE'
        }
      ],
      avatars: [
        'media/avatars/300-20.jpg',
        'media/avatars/300-25.jpg',
        'media/avatars/300-30.jpg'
      ],
      partnersAndStaff: [
        {
            name: 'Partners',
            position: `We have a wide portfolio of clients, spanning across different industries and of different sizes.  Our supplier and specialist partners allow us to deliver the best experience in the UK.   If you’re interested in a demo or just a chat, tap the button below and we’ll be in contact.`,
            buttonText1: 'GET IN TOUCH',
            buttonText2: 'OUR PARTNERS'
        },
        {
            name: 'Staff',
            position: `We provide manned guarding services all across the UK and are looking for more guards to position. We aim to be an employer of choice in the sector, offering transparent and fair contracts before you work with us and a dedicated concierge team and academy when you do.      Apply or see more about how we work below.`,
            buttonText1: 'APPLY NOW',
            buttonText2: 'VIEW POSITIONS'
        }
    ]
    }
  },
    components: {
        KTModalCard,
        Card1,
        Card2,
        Card3,
        Card4
    }
})
</script>