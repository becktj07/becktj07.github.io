
<?php /* Template Name: Home */ ?>

<?php get_header(); ?>
<div class="home-slider__outer-wrapper">
	<img src="<?php echo get_template_directory_uri(); ?>/images/untitled-black.svg" class="image-contain home-text-overlay" />
	<div class="home-slider__inner-wrapper">
		<section class="home-slider">
			<?php 
			if( have_rows('home_slider_repeater') ):
				while( have_rows('home_slider_repeater') ) : the_row(); 
					?>
					<div class="home-slider__slide"><img src="<?php the_sub_field('home_slider_image'); ?>" alt="" class="image-contain" /></div>
					<?php
				endwhile;
			endif;
			?>
		</section>
		<div class="i-button-wrapper">
			<a href="<?php echo site_url(); ?>/information">
				<img src="<?php echo get_template_directory_uri(); ?>/images/i-button.svg" class="image-contain" />
			</a>
		</div>
	</div>
</div>


<script src="<?php echo get_template_directory_uri(); ?>/scripts/homeSlider.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/scripts/vendor/slick.min.js"></script>
<?php
get_sidebar();
get_footer();
