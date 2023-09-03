import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  rem,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconMail,
  IconManualGearbox,
  IconPhoneCall,
  IconUsers,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export function CardNoImage(props) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{props.name}</Text>
          <Text fz="xs" c="dimmed">
            {props.title}
          </Text>
        </div>
        {/* <Badge variant="outline">8 Lines Code</Badge> */}
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          CONTACT
        </Text>

        <Group spacing={8} mb={-8}>
          <Center key={props.number}>
            <IconPhoneCall
              size="1.05rem"
              className={classes.icon}
              stroke={1.5}
            />
            <Text size="xs">{props.number}</Text>
          </Center>
          <Center key={props.email}>
            <IconMail size="1.05rem" className={classes.icon} stroke={1.5} />
            <Text size="xs">{props.email}</Text>
          </Center>
        </Group>
      </Card.Section>

      {/* <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              $168.00
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              per day
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            Rent now
          </Button>
        </Group>
      </Card.Section> */}
    </Card>
  );
}
