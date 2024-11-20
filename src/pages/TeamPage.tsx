import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { motion } from 'framer-motion';

interface Player {
  id: number;
  name: string;
  number: number;
  position: string;
  age: number;
  nationality: string;
  image: string;
  stats: {
    goals: number;
    assists: number;
    matchesPlayed: number;
  };
}

const leaders: Player[] = [
  {
    id: 1,
    name: 'David Tay',
    number: 10,
    position: 'Manager',
    age: 29,
    nationality: 'Ghanaian',
    image: '../images/sakiLogo.jpeg',
    stats: { goals: 15, assists: 8, matchesPlayed: 25 }
  },
  {
    id: 2,
    name: 'Julius Goku Emmanuelson',
    number: 12,
    position: 'Coach',
    age: 25,
    nationality: 'Ghanaian',
    image: '../images/sakiLogo.jpeg',
    stats: { goals: 10, assists: 5, matchesPlayed: 20 }
  },
];

const TeamPage: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState('All');

  const players: Player[] = [
    {
      id: 1,
      name: 'John Smith',
      number: 10,
      position: 'Defender',
      age: 27,
      nationality: 'Ghanaian',
      image: '../images/sakiLogo.jpeg',
      stats: { goals: 15, assists: 8, matchesPlayed: 25 }
    },
    {
        id: 1,
        name: 'John Smith',
        number: 27,
        position: 'Striker',
        age: 27,
        nationality: 'Ghanaian',
        image: '../images/sakiLogo.jpeg',
        stats: { goals: 15, assists: 8, matchesPlayed: 25 }
      },
      {
        id: 1,
        name: 'John Smith',
        number: 12,
        position: 'Forward',
        age: 27,
        nationality: 'Ghanaian',
        image: '../images/sakiLogo.jpeg',
        stats: { goals: 15, assists: 8, matchesPlayed: 25 }
      },
    // Add more players here
  ];

  const filteredPlayers = selectedPosition === 'All'
    ? players
    : players.filter(player => player.position === selectedPosition);

  const positions = ['All', ...Array.from(new Set(players.map(p => p.position)) as Set<string>)];

  return (
    <Box sx={{ padding: 4}}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#C41E3A' }} >
        Our Team
      </Typography>

      <Typography variant="h5" align="center" gutterBottom mt={4} mb={2} sx={{ color: '#1B5E20' }}>
        Leaders
      </Typography>

      <Grid container spacing={3}>
        {leaders.map(leader => (
          <Grid item xs={12} sm={6} md={4} key={leader.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card sx={{ border: '2px solid', borderColor: '#C41E3A', borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={leader.image}
                  alt={leader.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#C41E3A' }}>{leader.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    Age: {leader.age} | Nationality: {leader.nationality}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    Position: {leader.position}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mb={4} mt={4}>
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Position</InputLabel>
          <Select
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value as string)}
            label="Filter by Position"
          >
            {positions.map(pos => (
              <MenuItem key={pos} value={pos}>
                {pos}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {filteredPlayers.map(player => (
          <Grid item xs={12} sm={6} md={4} key={player.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card sx={{ border: '2px solid', borderColor: '#1B5E20', borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={player.image}
                  alt={player.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#1B5E20' }}>{player.name}</Typography>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Chip label={`#${player.number}`} color="primary" size="small" />
                    <Chip label={player.position} color="secondary" size="small" />
                  </Box>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    Age: {player.age} | Nationality: {player.nationality}
                  </Typography>
                  <Box mt={2}>
                    <Typography variant="subtitle2" sx={{ color: '#C41E3A' }}>Season Stats</Typography>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body2" sx={{ color: '#555' }}>Goals: {player.stats.goals}</Typography>
                      <Typography variant="body2" sx={{ color: '#555' }}>Assists: {player.stats.assists}</Typography>
                      <Typography variant="body2" sx={{ color: '#555' }}>Matches: {player.stats.matchesPlayed}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamPage;
