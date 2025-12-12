<script lang="ts">
	/**
	 * PROPS
	 */
	let { tel, email } = $props();
</script>

<dl class="v-contact-list">
	<dt>TELEFON:</dt>
	<dd><a href="tel:{tel}">{tel}</a></dd>
	<dt>E-MAIL:</dt>
	<dd><a href="mailto:{email}">{email}</a></dd>
</dl>

<style lang="scss">
	.v-contact-list {
		display: grid;
		grid-template-columns: 6rem 1fr;
		max-width: 22rem;
		font-family: 'ABC Monument Grotesk Mono';
		font-size: 0.9375rem;

		dd {
			text-align: center;
		}

		a {
			text-decoration: none;
		}
	}
</style>
