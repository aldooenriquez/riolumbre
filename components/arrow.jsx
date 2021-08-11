{
  scrollPosition > 500 && (
    <Link href="/#top">
      <Box position="fixed" bottom="20px" right={["16px", "84px"]} zIndex={1}>
        <Image src="images/icons/top.svg" w="60px" h="60px" />
      </Box>
    </Link>
  );
}
