import {Card, CardContent, Divider, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";

type BaseFormCardProps = {
    title: string,
    content?: JSX.Element,
    radio?: string[]
    sxProps?: any
}

const BaseFormCard = ({content, title, radio, sxProps}: BaseFormCardProps) => {
    return (
        <Card
            elevation={1}
            variant="outlined"
            sx={{
                padding: '1rem',
                width: "95%", margin: '10px',
                display: "inline-block",
                borderWidth: 5,
                shadowOpacity: 0.4,
                shadowRadius: 0.6,
                backgroundColor: '#f5f5f5',
                '&:hover': {
                    shadowDepth: 1,
                    backgroundColor: '#ffffff',
                },
                ...sxProps,

            }}
        >
            <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
            >
                {title}
            </Typography>
            <Divider/>
            <CardContent>
                {!radio && content}
                {radio && (
                    <RadioGroup>
                        {radio.map((item) => (
                            <FormControlLabel value={item} control={<Radio/>} label={item}/>
                        ))}
                    </RadioGroup>
                )}
            </CardContent>
        </Card>
    )
}

export default BaseFormCard;