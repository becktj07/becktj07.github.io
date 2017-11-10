
<?php /* Template Name: Information */ ?>

<?php get_header(); ?>

<section class="information wrapper">

<div class="branding-text-overlay">
<div>
    <img src="<?php echo get_template_directory_uri(); ?>/images/untitled-yellow.svg" class="image-contain branding-text-overlay untitled" />
    <!-- <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMax meet" width="899.84" height="226" viewBox="0 0 899.84 226"><g fill="#FFF6D6">
        <path class="untitled" d="M221.227 15.694v111.92h-.543l-40.92-111.92H148.84v195.66h30.11V89.133h.543l42.818 122.22h29.27V15.693M303.61 44.96h-32.52V15.694h98.644V44.96h-32.52v166.393h-33.603M394.124 15.693h33.604v195.66h-33.604zM484.366 44.96h-32.52V15.694h98.643V44.96h-32.52v166.393h-33.604M568.645 211.353V15.693h33.603v166.39h52.845v29.27M675.688 15.694v195.66h85.152v-29.27h-51.55v-57.45h43.36V95.367h-43.36V44.96h51.55V15.695M13.775 15.693h33.192V161.58c0 14.186 5.622 21.146 17.667 21.146 12.045 0 17.667-6.96 17.667-21.147V15.692h33.194V160.24c0 33.194-19.273 51.395-50.86 51.395s-50.858-18.2-50.858-51.395V15.693zM782.97 14.693h50c34.782 0 53.26 19.023 53.26 59.24v77.718c0 40.218-18.478 59.24-53.26 59.24h-50V14.693zm33.696 168.48h11.685c17.937 0 24.186-6.794 24.186-27.446v-85.87c0-20.652-6.25-27.446-24.185-27.446h-11.684v140.762z"/></g><g fill="#FFF6D6"><path d="M-938.327 115v-11.25s-.5-20.042-20.042-20.042c0 0-22.79-1.625-24.79 16.625v53.75s.5 20.042 20.04 20.042c0 0 22.793 1.625 24.793-16.625v-14.667h-14.917l-.083 11.667s-.75 6.5-7.417 6.5c0 0-6.833.5-7.667-6.5V115h.166l.083-11.667s.75-6.5 7.416-6.5c0 0 6.833-.5 7.667 6.5V115h14.75zM-888.41 219.25l14.25-1.75s-.25-20.5-20.25-21.25c0 0-22.5-1.5-23.75 21.75 0 0-1.75 14 16.75 28.25 0 0 19.25 14 12.5 24 0 0-6.25 8.25-14.5 0 0 0-2-8-2-9.75l-14.25 2.5s.25 23.25 22.75 24.5c0 0 24 0 24-23.5 0 0 .25-12.5-9.75-20.75 0 0-19.5-16-21.25-23 0 0-2.25-11 7.625-10.75 0 0 7.125-1.25 7.875 9.75z"/></g>
    </svg> -->
</div>
<div><img src="<?php echo get_template_directory_uri(); ?>/images/creative-yellow.svg" class="image-contain branding-text-overlay creative" /></div>
<div><img src="<?php echo get_template_directory_uri(); ?>/images/studio-yellow.svg" class="image-contain branding-text-overlay studio" /></div>
</div>

    <div class="info-flex-container">
        <div class="info-headings">
            <h2>Branding</h2>
            <ul>
                <li>Research + Discovery</li>
                <li>Brand Positioning</li>
                <li>Brand Messaging</li>
                <li>Brand Strategy</li>
                <li>Naming</li>
            </ul>
            <h2>Design</h2>
            <ul>
                <li>Brand Identity</li>
                <li>Publishing Design</li>
                <li>Packaging Design</li>
                <li>Print Collateral</li>
                <li>Events + Exhibitions</li>
                <li>Environments</li>
                <li>Website Strategy, Design, & Development</li>
                <li>User Experience Strategy + Design</li>
                <li>Mobile</li>
            </ul>
        </div>
        <div class="info-description">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
            quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            </p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
        </div>
    </div>

    <div class="info-flex-container info-flex-container--lower">
        <div class="info-headings">
            <h2>Content Development + Management</h2>
            <ul>
                <li>SEO/Analytics</li>
                <li>Website Maintenance</li>
                <li>Social Media</li>
                <li>Marketing</li>
                <li>Copywriting</li>
                <li>Photography</li>
                <li>Video Production</li>            
            </ul>
        </div>
        <div class="info-description">
            <h2 class="potential-projects">To discuss potential projects, please contact us at:</h2>
            <ul>
                <li>info @untitledcreaetivestudio.com</li>
                <li>414-XXX-XXXX</li>
                <li>1835 N 54th <br>
                Milwaukee, WI 53208
                </li>
            </ul>
        </div>
    </div>
</section>

<div class="x-button-wrapper">
	<a class="button-trigger" href="<?php echo site_url(); ?>">
		<img src="<?php echo get_template_directory_uri(); ?>/images/x-button.svg" class="" />
	</a>
</div>

<script src="<?php echo get_template_directory_uri(); ?>/scripts/animations.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/scripts/vendor/smartresize.min.js"></script>

<?php
get_sidebar();
get_footer();
