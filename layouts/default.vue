<template data-theme="cupcake">
    <div>
    <!-- this is default layout . a component will get it in default -->
    <NuxtLoadingIndicator />
      <LayoutHeader></LayoutHeader>
      <slot/>
      <LayoutFooter></LayoutFooter>
    </div>
  </template>