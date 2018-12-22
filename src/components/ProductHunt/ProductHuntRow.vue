<template>
    <div class="product-hunt-item">
        <img   :src="data.thumbnail.image_url+'&w=80&h=80'"
               :srcset="data.thumbnail.image_url+'&w=80&h=80&dpr=2'"
               class="product-hunt-image"
               alt="">
        <div class="product-hunt-infos">
            <a  :href="'https://www.producthunt.com/posts/'+data.slug"
                class="product-hunt-title">{{ data.name }}</a>
            <span class="product-hunt-desc">{{ data.tagline }}</span>
            <span class="product-hunt-sub">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                    </svg>
                    <span>&nbsp;{{ data.votes_count }}</span>
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
                    </svg>
                    <span>&nbsp;{{ data.comments_count }}</span>
                </span>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    interface DataInterface extends Object {
        thumbnail: {
            image_url: string
        },
        slug: string,
        name: string,
        tagline: string,
        votes_count: number,
        comments_count: number,
    }

    @Component<ProductHuntRow>({})
    export default class ProductHuntRow extends Vue {
        @Prop(Object) data!: DataInterface;
    }
</script>

<style scoped>
    .product-hunt-item {
        align-items: stretch;
        border-bottom: 1px solid rgba(223,227,232,.66);
        display: flex;
        flex-direction: row;
        font-size: 16px;
        justify-content: flex-start;
        padding: 16px 0;
        text-align: left;
    }

    .product-hunt-image {
        align-self: center;
        height: 80px;
        margin-right: 15px;
        width: 80px;
    }

    .product-hunt-infos {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .product-hunt-title {
        font-size: 20px;
        font-weight: 300;
        line-height: 32px;
    }

    .product-hunt-desc {
        color: #999;
        font-size: 13px;
        font-weight: 400;
        word-break: break-all;
    }

    .product-hunt-sub {
        color: #999;
        font-size: 12px;
    }

    .product-hunt-sub > span {
        margin-right: 1.5em;
    }

    .product-hunt-sub svg {
        font-size: 12px;
        margin: -4px 2px -2px 0;
        width: 0.875em;
    }
</style>